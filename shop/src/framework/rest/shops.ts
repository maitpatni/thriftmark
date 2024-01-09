import { ShopsQueryOptionsType, Shop, ShopPaginator } from '@type/index';
import { API_ENDPOINTS } from '@framework/utils/endpoints';
import {
  useInfiniteQuery,
  useQuery,
} from 'react-query';
import client from '@framework/utils/index'
import { useRouter } from 'next/router';

export function useShops(params: ShopsQueryOptionsType) {
  const { locale } = useRouter();
  const formattedOptions = {
    ...params,
    language: locale,
  };
  return useInfiniteQuery<ShopPaginator, Error>(
    [API_ENDPOINTS.SHOPS, formattedOptions],
    ({ queryKey, pageParam }) => client.shop.find(Object.assign({}, queryKey[1], pageParam)),
    {
      getNextPageParam: ({ current_page, last_page }) =>
        last_page > current_page && { page: current_page + 1 },
    }
  );
}

export const useShop = (slug: string) => {
  const { locale } = useRouter();
  const formattedOptions = {
    slug,
    language: locale,
  };
  return useQuery<Shop, Error>(
    [API_ENDPOINTS.SHOPS, formattedOptions],
    ({ queryKey, pageParam }) => client.shop.findOne(Object.assign({}, queryKey[1], pageParam)),
    {
      keepPreviousData: true,
    }
  );
};
