import Image from 'next/image';
import Text from '@components/ui/text';
import * as socialIcons from '@components/icons/social';
import { formatAddress } from '@lib/format-address';
import { getIcon } from '@lib/get-icon';
import { useTranslation } from 'next-i18next';
import isEmpty from 'lodash/isEmpty';
import cn from 'classnames';
import { productPlaceholder } from '@lib/placeholders';
import ReadMore from '@components/ui/truncate';

interface ShopSidebarProps {
  data: any;
  className?: string;
}

const ShopSidebar: React.FC<ShopSidebarProps> = ({ data, className }) => {
  const { t } = useTranslation();

  return (
    <div className={cn('flex flex-col pt-10 lg:pt-14 px-6', className)}>
      <div className="w-full pb-8 text-center border-b border-gray-300">
        <div className="flex justify-center">
          <div className="w-32 h-32 mx-auto lg:w-auto lg:h-auto">
            <Image
              src={data?.logo?.original! ?? productPlaceholder}
              alt={data?.name}
              width={180}
              height={180}
              className="rounded-xl"
            />
          </div>
        </div>
        <Text variant="heading" className="mt-6 mb-1.5">
          {data?.name}
        </Text>
        {/* <Text>{data?.description}</Text> */}
        {data?.description && (
          <Text>
            <ReadMore character={70}>{data.description}</ReadMore>
          </Text>
        )}
        <div className="flex items-center flex-wrap justify-center space-x-2 rtl:space-x-reverse pt-4 mt-0.5">
          {data?.settings?.socials?.map((item: any, index: number) => (
            <a
              key={index}
              href={item?.url}
              target="_blank"
              rel="noreferrer"
              className={`text-muted focus:outline-none ltr:last:mr-0 rtl:last:ml-0 transition-colors duration-300 hover:${item.hoverClass}`}
            >
              {getIcon({
                iconList: socialIcons,
                iconName: item?.icon,
                className: 'transition-all hover:opacity-90 w-6 h-6',
              })}
            </a>
          ))}
        </div>
      </div>
      <div className="space-y-6 py-7">
        {/* Address */}
        <div className="block">
          <h4 className="text-heading font-semibold text-sm mb-1.5">
            {t('text-address-colon')}
          </h4>
          {!isEmpty(formatAddress(data?.address)) ? (
            <Text>{formatAddress(data?.address)}</Text>
          ) : (
            t('common:text-no-address')
          )}
        </div>

        {/* Contact */}
        <div className="block">
          <h4 className="text-heading font-semibold text-sm mb-1.5">Phone:</h4>
          <div className="flex items-center justify-between">
            {data?.settings?.contact ? (
              <>
                <Text>{data?.settings?.contact}</Text>
                <button className="flex-shrink-0 text-sm font-semibold transition-all text-heading hover:opacity-80">
                  {t('text-call-now')}
                </button>
              </>
            ) : (
              t('text-no-contact')
            )}
          </div>
        </div>

        {/* Website */}
        {data?.settings?.website && (
          <div className="block">
            <h4 className="text-heading font-semibold text-sm mb-1.5">
              {t('text-website-colon')}
            </h4>
            <div className="flex items-center justify-between">
              <Text>{data?.settings?.website}</Text>
              <a
                href={`https://${data?.settings?.website}`}
                target="_blank"
                rel="noreferrer"
                className="flex-shrink-0 text-sm font-semibold transition-all text-heading hover:opacity-80"
              >
                {t('text-visit-site')}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopSidebar;
