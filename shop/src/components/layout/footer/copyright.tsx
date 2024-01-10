import Container from "@components/ui/container";
import { useTranslation } from "next-i18next";
import socialIcons from "@components/icons/social-icon";
import { useSettings } from "@contexts/settings.context";
import { getIcon } from "@lib/get-icon";
import Image from 'next/image';

const year = new Date().getFullYear();

const Copyright: React.FC = () => {
  const { t } = useTranslation("footer");
  
  const settings = useSettings();
  const socials = settings?.contactDetails?.socials;

  return (
    <div className="border-t border-gray-300 pt-5 pb-16 sm:pb-20 md:pb-5 mb-2 sm:mb-0">
      <Container className="flex flex-col-reverse md:flex-row justify-center md:justify-between text-center md:text-left">
        <p className="pt-2 text-body text-xs md:text-[13px] lg:text-sm leading-6 textWhiteOverride">
          {t('text-copyright')} &copy; {year}&nbsp;
          <a
            className="text-white transition-colors duration-200 ease-in-out hover:text-gray-700"
            href="https://thriftmark.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            Thriftmark
          </a>. All Rights Reserved.<br></br>Developed & Hosted by{" "}
          <a
            className="text-white transition-colors duration-200 ease-in-out hover:text-gray-700"
            href="https://broodle.host"
            target="_blank"
          >
            Broodle
          </a>.
        </p>

        <div className="order-last md:order-none flex items-center justify-center px-7 py-5 md:py-0 flex-shrink-0 space-x-2 rtl:space-x-reverse">
					{socials?.map((social: Social, index: number) => (
						<a
							href={social?.url ?? "#!"}
							className={`text-xl p-2 opacity-100 bg-white rounded-full ltr:first:-ml-4 rtl:first:-mr-4 transition duration-300 ease-in hover:opacity-60 text-black`}
							target="_blank"
              rel="noreferrer"
							key={index}
						>
              {getIcon({
                iconList: socialIcons,
                iconName: social?.icon
              })}
						</a>
					))}
				</div>
        
        {/* Include the img tag for payment methods */}
        <div className="self-center">
          <img src="/assets/images/payment/payment_methods_inr.png" width="320px" alt="Payment Methods" />
        </div>
      </Container>
    </div>
  );
};

export default Copyright;