import { GetStaticProps } from "next";
import { QueryClient } from "react-query";
import { API_ENDPOINTS } from "@framework/utils/endpoints";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import client from '@framework/utils/index'
import { siteSettings } from "@settings/site.settings";
import { dehydrate } from "react-query/hydration";
import { SettingsQueryOptions } from "@type/index";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });

  try {
    await Promise.all([
      await queryClient.prefetchQuery([API_ENDPOINTS.SETTINGS, { language: locale }], ({ queryKey }) => client.settings.findAll(queryKey[1] as SettingsQueryOptions)),

      await queryClient.prefetchQuery(
        [API_ENDPOINTS.CATEGORIES, { limit: 10, parent: null, language: locale }],
        ({ queryKey, pageParam }) => client.category.find(Object.assign({}, queryKey[1], pageParam))
      ),

      // Fetch products based on tags -> featured-products products
      await queryClient.prefetchQuery(
        [
          API_ENDPOINTS.PRODUCTS,
          {
            limit: 4,
            tags: siteSettings?.homePageBlocks?.featuredProducts?.slug,
            language: locale
          },
        ],
        ({ queryKey, pageParam }) => client.product.find(Object.assign({}, queryKey[1], pageParam)),
      ),

      // Fetch products based on tags -> flash-sale products
      await queryClient.prefetchQuery(
        [
          API_ENDPOINTS.PRODUCTS,
          {
            limit: 10,
            tags: siteSettings?.homePageBlocks?.flashSale?.slug,
            language: locale
          },
        ],
        ({ queryKey, pageParam }) => client.product.find(Object.assign({}, queryKey[1], pageParam)),
      ),

      // Fetch brands
      await queryClient.prefetchQuery(
        [API_ENDPOINTS.TYPE, { limit: 12, language: locale }],
        ({ queryKey, pageParam }) => client.brands.find(Object.assign({}, queryKey[1], pageParam))
      ),

      // popular products
      await queryClient.prefetchQuery(
        [
          API_ENDPOINTS.POPULAR_PRODUCTS,
          {
            limit: 6,
            language: locale
          },
        ],
        ({ queryKey, pageParam }) => client.product.find(Object.assign({}, queryKey[1], pageParam)),
      ),
    ]);

    return {
      props: {
        ...(await serverSideTranslations(locale!, [
          "common",
          "menu",
          "forms",
          "footer",
        ])),
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
      revalidate: Number(process.env.REVALIDATE_DURATION) ?? 120,
    };
  } catch (error) {
    // If we get here means something went wrong in promise fetching
    return {
      notFound: true,
    };
  }
};
