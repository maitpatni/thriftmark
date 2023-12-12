import { mapPaginatorData } from '@framework/utils/data-mappers';
import { API_ENDPOINTS } from '@framework/utils/endpoints';
import { useInfiniteQuery, useMutation } from 'react-query';
import client from '@framework/utils/index'
import { toast } from "react-toastify";
import { useTranslation } from "next-i18next";
import { useState } from 'react';
import { useAtom } from 'jotai';
import { couponAtom } from '@store/checkout';

import {
  CouponPaginator
} from "@type/index";

export function useCoupons(options: any = { limit: 15 }) {

  const {
    data,
    fetchNextPage,
    isLoading,
    hasNextPage,
    isFetchingNextPage
  } = useInfiniteQuery<CouponPaginator, Error>(
    [API_ENDPOINTS.COUPONS, options],
    ({ queryKey, pageParam }) => client.coupon.all(Object.assign({}, queryKey[1], pageParam)),
    {
      getNextPageParam: ({ current_page, last_page }) =>
        last_page > current_page && { page: current_page + 1 },
    }
  );

  return {
    data: data?.pages?.flatMap((page) => page?.data) ?? [],
    paginatorInfo: mapPaginatorData(data?.pages[data.pages.length - 1]),
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  };
}

export const useVerifyCoupon = () => {
  const { t } = useTranslation();
  const [hasCoupon, setHasCoupon] = useState(false);
  const [coupon, applyCoupon] = useAtom(couponAtom);
  return useMutation(client.coupon.verifyCoupon, {
    onSuccess: (data: any) => {
      if (data.is_valid) {
        applyCoupon(data.coupon);
        setHasCoupon(false);
      } else {
        toast.error(t(data?.message));
      }
    },
    onError: (error) => {
      const {
        response: { data },
      }: any = error ?? {};

      toast.error(t(data?.message));
    },
  });
};