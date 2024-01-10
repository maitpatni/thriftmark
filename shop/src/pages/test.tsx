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
      <div className="flex items-center justify-center" style={{ width: '100%'}}>
        <img
          src="/assets/images/hero/thriftmark-home-banner-desktop-v4.jpg"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover', 
            objectPosition: 'center top', 
          }}
        />
      </div>

      <div style={{ backgroundImage: `url("/assets/images/homepage/home-page-section-2.png")`, position: 'inherit', backgroundSize: 'cover', padding: '50px 0', marginTop: '-15px', marginBottom: '50px'}}>
        <div className="container-full-width" style={{ maxWidth: '100%', margin: '0 auto', padding: '20px' }}>
          <h2 className="text-white" style={{ textAlign: 'center', fontSize: '65px', fontFamily: "'Italiana', sans-serif" }}>ThriftEasy</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, textAlign: 'center', margin: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src="/assets/images/feature/list-the-pre-loved.svg" alt="Icon 1" style={{ height: '250px' }} />
              <h3 className="text-white mb-2" style={{ fontSize: '40px', marginBottom: '10px', fontFamily: "'Italiana', sans-serif" }}>List the pre-loved</h3>
              <p className="text-white" style={{ padding: "0 20%", fontSize: '15px' }}>list the clothes that need to be re-loved.</p>
            </div>
            <div style={{ flex: 1, textAlign: 'center', margin: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src="/assets/images/feature/ship-the-deliverables.svg" alt="Icon 2" style={{ height: '250px' }} />
              <h3 className="text-white mb-2" style={{ fontSize: '40px', marginBottom: '10px', fontFamily: "'Italiana', sans-serif" }}>Ship  the deliverables</h3>
              <p className="text-white" style={{ padding: "0 20%", fontSize: '15px' }}>pack & deliver it to the buyers with our free shipping label.</p>
            </div>
            <div style={{ flex: 1, textAlign: 'center', margin: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src="/assets/images/feature/enjoy-the-rewards.svg" alt="Icon 3" style={{ height: '250px' }} />
              <h3 className="text-white mb-2" style={{ fontSize: '40px', fontFamily: "'Italiana', sans-serif" }}>Enjoy the rewards</h3>
              <p className="text-white" style={{ padding: "0 20%", fontSize: '15px' }}>receive the amount directly in your TMwallet, UPI or bank account.</p>
            </div>
          </div>
        </div>
      </div>

      <Container>
                <NewArrivalsProductFeed />
              </Container>

      <div style={{
        position: 'relative',
        textAlign: 'center',
        zIndex: '-1'
      }}>
        <img 
          style={{
            width: '100%',
            height: 'auto'
          }} 
          src="/assets/images/homepage/home-page-section-4.png" 
        />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          marginTop: '5%',
          padding: '0 5%'
        }}>
            <h2 className="text-[#535BA3] font-medium mt-10 mb-4" style={{ fontSize: '65px', lineHeight: '1em' }}>A TRIBE CALLED THRIFTERS</h2>
            <p className="text-[#535BA3] text-justify text-xl">
            Hey there, trendsetters of Generation Z! Are you tired of blending in with the masses, wearing the same cookie-cutter outfits everyone else is sporting? Well, we've got a fantastic fashion adventure waiting just for you! Join us in a revolution that's all about celebrating individuality, sustainability, and rocking pre-loved threads with a whole lotta love!
          </p>
          <button class="bg-[#5D64AB] hover:bg-blue-700 text-white font-medium tracking-wider py-2 px-4 mt-4 ">
            Read More
          </button>
        </div>
      </div>

      <div
          className="items-center -mt-11 mb-18 md:mb-50 z-10"
          style={{
              backgroundImage: 'url("/assets/images/homepage/home-page-section-5.png")',
              backgroundSize: 'contain',
              width: '100%',
              padding: '12%',
              backgroundRepeat: 'no-repeat',
              zIndex: '9'
          }}
      >
          <div className="text-center">
              <h2 className="text-7xl text-white font-bold mb-4 tracking-wider">From racks to feeds,<br />discover thrifted deeds!</h2>
              <p className="text-white font-bold text-5xl">
                  @thriftmark.co
              </p>
          </div>
          <div className="mt-4"
          style={{
            paddingLeft: 'calc(100vw / 6)',
            paddingRight: 'calc(100vw / 6)',
          }}>
              <form action="#">
                      {/* <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0"> */}
                      <div className="items-center flex mx-auto mb-3">
                          <div className="relative w-full">
                              <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                              </div>
                              <input className="block p-3 pl-10 w-full bg-[#FFF8EB] rounded-lg" placeholder="Enter your email" type="email" id="email" required />
                          </div>
                          <div>
                              <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600">Submit</button>
                          </div>
                      </div>
                      <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">Join our newsletter and receive the latest deals and exciting offers.</div>
                </form>
              </div>
          </div>
          <div className="text-center my-10">
              <h2 className="text-6xl font-bold mb-6 text-[#F05840]">As Seen On</h2>
              <img src="/assets/images/homepage/home-page-section-6.png" alt="As Seen On Image" className="mx-auto px-20" />
          </div>

    </>
  );
}

Home.getLayout = getLayout;