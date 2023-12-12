import Widgets from "./widgets";
import Copyright from "./copyright";
import { footer } from "./data";
const { widgets, payment } = footer;

const Footer: React.FC = () => (
  <footer
  style={{ paddingTop: '50px' }}  
  className="border-b-4 border-heading pt-2.5 lg:pt-0 2xl:pt-2 bg-[#F05840]">
  {/*className="border-b-4 border-heading mt-9 md:mt-11 lg:mt-16 3xl:mt-20 pt-2.5 lg:pt-0 2xl:pt-2 bg-[#F05840]">*/}
    <Widgets widgets={widgets} />
    <Copyright payment={payment} />
  </footer>
);

export default Footer;
