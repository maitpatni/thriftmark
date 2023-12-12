import Container from '@components/ui/container';
import { useTranslation } from "next-i18next";

interface CopyrightProps {
  payment?: {
    id: string | number;
    path?: string;
    name: string;
    image: string;
    width: number;
    height: number;
  }[];
}
const year = new Date().getFullYear();
const Copyright: React.FC<CopyrightProps> = ({ payment }) => {
  const { t } = useTranslation("footer");
  return (
    <div className="border-t border-gray-300 pt-5 pb-16 sm:pb-20 md:pb-5 mb-2 sm:mb-0">
      <Container className="flex flex-col-reverse md:flex-row justify-center md:justify-between text-center md:text-left">
        <p className="pt-2 text-body text-xs md:text-[13px] lg:text-sm leading-6 textWhiteOverride">
          {t('text-copyright')} &copy; {year}&nbsp;
         <a
            className="text-white transition-colors duration-200 ease-in-out hover:text-gray-700"
            href="https://thriftmark.in"
            target="_blank"
            rel="noopener noreferrer">
            Thriftmark</a>. All Rights Reserved.<br></br>Developed & Hosted by{" "}
          <a className="text-white transition-colors duration-200 ease-in-out hover:text-gray-700" href="https://broodle.host" target="_blank" >Broodle</a>.</p>   
          
       
          <ul className="hidden md:flex flex-wrap justify-center items-center space-x-4 xs:space-x-5 lg:space-x-7 rtl:space-x-reverse mb-1 md:mb-0 mx-auto md:mx-0">
           
              <img src="assets/images/payment/payment_methods_inr.png" width="320px"></img>
          </ul>
      
      </Container>
    </div>
  );
};

export default Copyright;
