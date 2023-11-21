import Container from '@components/ui/container';
import { getLayout } from '@components/layout/layout-three';
import NewArrivalsProductFeed from '@components/product/feeds/new-arrivals-product-feed';
import { useEffect } from 'react';
import { useUI } from '@contexts/ui.context';
export { getStaticProps } from '@framework/homepage/standard';

export default function Home() {
  // const { openModal, setModalView } = useUI();

  // useEffect(() => {
    //   setModalView('NEWSLETTER_VIEW');
    //   setTimeout(() => {
      //     openModal();
    //   }, 2000);
  // }, []);

  return (
    <>
      <div className="flex items-center justify-center w-full">
        <img
          className="hidden md:block w-full h-auto object-cover object-top"
          src="/assets/images/hero/thriftmark-home-banner-desktop-v4.jpg"
          alt="Desktop banner"
        />
        <img
          className="block md:hidden w-full h-auto object-cover object-top"
          src="/assets/images/hero/thriftmark-home-banner-mobile-v1.png"
          alt="Mobile banner"
        />
      </div>
      
      <div className="relative bg-cover py-12 mt-[-15px] mb-12"
        style={{ backgroundImage: `url("/assets/images/homepage/home-page-section-2.png")` }}>
        <div className="container-full-width mx-auto px-5">
          <h2 className="text-white text-center text-5xl md:text-6xl lg:text-[65px] leading-none mb-8">ThriftEasy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center mb-4 md:mb-0">
              <img src="/assets/images/feature/list-the-pre-loved.svg" alt="Icon 1" className="h-[250px] mb-2" />
              <h3 className="text-white text-2xl lg:text-[40px] leading-none mb-2">List the pre-loved</h3>
              <p className="text-white text-center px-4 md:px-6 lg:px-[20%] text-sm lg:text-[15px]">List the clothes that need to be re-loved.</p>
            </div>
            <div className="flex flex-col items-center mb-4 md:mb-0">
              <img src="/assets/images/feature/ship-the-deliverables.svg" alt="Icon 2" className="h-[250px] mb-2" />
              <h3 className="text-white text-2xl lg:text-[40px] leading-none mb-2">Ship the deliverables</h3>
              <p className="text-white text-center px-4 md:px-6 lg:px-[20%] text-sm lg:text-[15px]">Pack & deliver it to the buyers with our free shipping label.</p>
            </div>
            <div className="flex flex-col items-center mb-4 md:mb-0">
              <img src="/assets/images/feature/enjoy-the-rewards.svg" alt="Icon 3" className="h-[250px] mb-2" />
              <h3 className="text-white text-2xl lg:text-[40px] leading-none">Enjoy the rewards</h3>
              <p className="text-white text-center px-4 md:px-6 lg:px-[20%] text-sm lg:text-[15px]">Receive the amount directly in your TMwallet, UPI, or bank account.</p>
            </div>
          </div>
        </div>
      </div>

      <Container>
                <NewArrivalsProductFeed />
              </Container>

      <div className="relative text-center">
          <img className="w-full h-auto md:hidden" src="/assets/images/homepage/home-page-section-4-mobile-v3.png" />
          <img className="hidden md:block w-full h-auto" src="/assets/images/homepage/home-page-section-4.png" />
          <div className="mt-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:mt-[5%]">
              <div className="px-12 md:px-[5%] lg:max-w-2xl xl:max-w-3xl mx-auto">
                  <h2 className="text-[#535BA3] font-semibold text-2xl leading-none md:text-[65px] md:leading-[1em] md:mt-10 md:mb-4">A TRIBE CALLED THRIFTERS</h2>
                  <p className="text-[#535BA3] text-xs text-justify md:text-center md:text-xl">
                  Hey there, trendsetters of Generation Z! Are you tired of blending in with the masses, wearing the same cookie-cutter outfits everyone else is sporting? Well, we've got a fantastic fashion adventure waiting just for you! Join us in a revolution that's all about celebrating individuality, sustainability, and rocking pre-loved threads with a whole lotta love!
                  </p>
                  <button className="bg-[#5D64AB] hover:bg-blue-700 text-white font-medium tracking-wider py-1 px-2 mt-2 md:py-2 md:px-4 md:mt-4">
                  Read More
                  </button>
              </div>
          </div>
      </div>

      <div className="relative text-center z-9 -mt-11">
          <img className="h-auto md:hidden bg-[#B6CC71] -mx-2" src="/assets/images/homepage/home-page-section-5-mobile-v2.png" />
          <img className="hidden md:block w-full h-auto" src="/assets/images/homepage/home-page-section-5.png" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
              <div className="lg:max-w-2xl xl:max-w-3xl mx-auto">
              <h2 className="text-base leading-5 sm:leading-6 md:leading-7 sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-white font-semibold mb-1 md:mb-2 tracking-wider">
                    From racks to feeds,<br />discover thrifted deeds!
                </h2>
                <p className="text-base md:text-2xl lg:text-4xl xl:text-5xl text-white font-semibold">
                    @thriftmark.co
                </p>
                <form action="#" className="mt-2 px-20 sm:mt-4 md:mt-4 px-16 sm:px-24 md:px-52 lg:px-10 xl:px-0">
                  <div className="flex flex-col sm:flex-row items-center mx-auto mb-3">
                  <div className="relative w-full">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  </div>
                  <input
                  className="block p-1 pl-10 w-full text-sm text-gray-900 bg-[#FFF8EB] rounded-lg border-0 focus:ring-blue-500 focus:border-blue-500 sm:p-3 sm:pl-10 lg:text-base"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  required
                  />
                  </div>
                  <div className="w-full sm:w-auto sm:ml-4">
                  <button type="submit" className="w-full sm:w-auto p-1 px-2 sm:py-3 sm:px-5 text-xs font-semibold text-center text-white border border-white rounded-lg hover:bg-white hover:text-primary-700 focus:ring-4 focus:ring-primary-200 focus:outline-none transition ease-in-out duration-150"> Submit </button>
                  </div>
                  </div>
                  <div className="text-xs leading-3 sm:leading-4 md:leading-5 sm:text-base md:text-lg xl:text-xl text-center text-white">
                  Join our newsletter and receive the latest deals and exciting offers.
                  </div>
                  </form>
              </div>
          </div>
      </div>
          <div className="text-center my-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#F05840]">As Seen On</h2>
              <img 
                src="/assets/images/homepage/home-page-section-6.png" 
                alt="As Seen On Image" 
                className="mx-auto px-5 sm:px-10 md:px-20 w-full sm:w-auto" 
              />
          </div>
    </>
  );
}

Home.getLayout = getLayout;