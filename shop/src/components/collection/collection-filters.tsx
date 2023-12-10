import React from 'react';
import { useTranslation } from 'next-i18next';
import ActiveLink from '@components/ui/active-link';
import { ROUTES } from '@lib/routes';
import { useTags } from '@framework/tags';
import { useUI } from '@contexts/ui.context';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import Spinner from '@components/ui/loaders/spinner/spinner';

export const CollectionFilters: React.FC = () => {
  const { t } = useTranslation('common');
  const { closeFilter } = useUI();
  const { data, isLoading: loading } = useTags({});
  const {
    query: { tags },
  } = useRouter();

  if (loading) return <Spinner showText={false} />;

  const items = data?.pages?.[0]?.data;

  return (
    <div className="pt-1">
      <div className="block pb-3 border-b border-gray-300 xl:pb-5 mb-7">
        <div className="flex items-center justify-between mb-2.5">
          <h2 className="text-base font-semibold text-heading md:text-xl lg:text-2xl">
            {t('text-collection-list')}
          </h2>
        </div>
      </div>
      <div className="block pb-7">
        <ul className="flex flex-col mt-2 space-y-5">
          {items?.map((item: any) => (
            <li
              key={item.id}
              className="text-sm lg:text-[15px] cursor-pointer"
              onClick={closeFilter}
            >
              <ActiveLink
                href={`${ROUTES.COLLECTIONS}/${item.slug}`}
                className={classNames(
                  'block transition duration-300 ease-in-out text-heading hover:font-semibold py-0.5',
                  tags === item?.slug && 'font-semibold'
                )}
              >
                {item.name}
              </ActiveLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
