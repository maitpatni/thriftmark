import { API_ENDPOINTS } from '@framework/utils/endpoints';
import { useQuery } from 'react-query';
import { SettingsResponse } from '@type/index';
import client from '@framework/utils/index'
import { useRouter } from 'next/router';
import { SettingsQueryOptions } from "@type/index";

export const useSettings = () => {
  const { locale } = useRouter();

  return useQuery<SettingsResponse, Error>(
    [API_ENDPOINTS.SETTINGS, { language: locale }],
    ({ queryKey }) =>
      client.settings.findAll(queryKey[1] as SettingsQueryOptions)
  );
};