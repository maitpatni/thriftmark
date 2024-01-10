import BannerCard from '@components/common/banner-card';
import Container from '@components/ui/container';
import CategoryBlock from '@containers/category-block';
import FeatureBlock from '@containers/feature-block';
import { getLayout } from '@components/layout/layout';
import ExclusiveBlock from '@containers/exclusive-block';
import NewArrivalsProductFeed from '@components/product/feeds/new-arrivals-product-feed';
import ProductsFlashSaleBlock from '@containers/product-flash-sale-block';
import ProductsFeatured from '@containers/products-featured';
import Subscription from '@components/common/subscription';
import { ROUTES } from '@lib/routes';
import HeroSlider from '@containers/hero-slider';
import BrandGridBlock from '@containers/brand-grid-block';
import {
  homeElegantHeroSlider as heroBanner,
  elegantBannerDataThree,
  elegantHomeBanner,
} from '@data/static/banners';
import TestimonialCarousel from '@containers/testimonial-carousel';
import BannerBlock from '@containers/banner-block';
import CollectionBlock from '@containers/collection-block';
import { modernDemoCollectionData } from '@data/static/collection';
import ProductsTopBlock from '@containers/products-top-block';

export { getStaticProps } from '@framework/homepage/elegant';

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center h-[500px] md:h-[720px]" style={{ backgroundImage: 'url("/assets/images/hero/thriftmark-home-banner-desktop-v4.jpg")', backgroundSize: 'cover' }}>
        {/* Content for the full-width section */}
      </div>

      <FeatureBlock />

      {/* Icon block */}
      <div className="bg-[#656daf] relative" style={{ backgroundImage: 'url("/assets/images/homepage/Rectangle.png")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>
        <Container className="container-full-width">
          <div className="container mx-auto px-4 relative" style={{ position: 'relative', zIndex: 2 }}>
            <h2 className="text-2xl font-bold mb-4 text-center text-white">ThriftEasy</h2>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center">
                <div>
                  <img src="/assets/images/feature/list-the-pre-loved.svg" alt="Icon 1" style={{ height: '250px' }} />
                </div>
                <h3 className="text-xl font-bold mt-4 text-white">List the pre-loved</h3>
                <p className="text-white mt-2">list the clothes that need to be re-loved</p>
              </div>
              <div className="flex flex-col items-center">
                <div>
                  <img src="/assets/images/feature/ship-the-deliverables.svg" alt="Icon 1" style={{ height: '250px' }} />
                </div>
                <h3 className="text-xl font-bold mt-4 text-white">Ship the deliverables</h3>
                <p className="text-white mt-2">pack & deliver it to the buyers with our free shipping label</p>
              </div>
              <div className="flex flex-col items-center">
                <div>
                  <img src="/assets/images/feature/enjoy-the-rewards.svg" alt="Icon 1" style={{ height: '250px' }} />
                </div>
                <h3 className="text-xl font-bold mt-4 text-white">Enjoy the rewards</h3>
                <p className="text-white mt-2">receive the amount directly in your TMwallet, UPI, or bank account</p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="parent-container-section2 container-full-width" style={{ background: `url("/assets/images/homepage/Rectangle-2.png") `, padding: '100px 0 50px 0', backgroundPosition: 'top', height: '100%' }}>
        <div className="container-section2 container-full-width" style={{ maxWidth: '100%', margin: '0 auto' }}>
          <h2 className="heading-section2 text-white" style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Section Heading</h2>
          <div className="inner-section-section2" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <div className="column-section2" style={{ flex: 1, textAlign: 'center', margin: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src="/assets/images/feature/list-the-pre-loved.svg" alt="Icon 1" style={{ height: '250px' }} />
              <h3 className="heading-column-section2 text-white" style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Heading 1</h3>
              <p className="paragraph-section2 text-white" style={{ marginTop: '10px' }}>Content for Column 1</p>
            </div>
            <div className="column-section2" style={{ flex: 1, textAlign: 'center', margin: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src="/assets/images/feature/ship-the-deliverables.svg" alt="Icon 2" style={{ height: '250px' }} />
              <h3 className="heading-column-section2 text-white" style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Heading 2</h3>
              <p className="paragraph-section2 text-white" style={{ marginTop: '10px' }}>Content for Column 2</p>
            </div>
            <div className="column-section2" style={{ flex: 1, textAlign: 'center', margin: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src="/assets/images/feature/enjoy-the-rewards.svg" alt="Icon 3" style={{ height: '250px' }} />
              <h3 className="heading-column-section2 text-white" style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Heading 3</h3>
              <p className="paragraph-section2 text-white" style={{ marginTop: '10px' }}>Content for Column 3</p>
            </div>
          </div>
        </div>
      </div>

      <Container>
        <NewArrivalsProductFeed />
      </Container>

      <div className="flex items-center justify-center h-[500px] mb-18 md:mb-50" style={{ backgroundImage: 'url("/assets/images/banner/masonry/banner-1.jpg")', backgroundSize: 'cover', paddingLeft: '200px', paddingRight: '200px' }}>
        <div className="text-center">
          <h2 className="text-4xl text-[#535BA3] font-bold mb-4">A TRIBE CALLED THRIFTERS</h2>
          <p className="text-[#535BA3]">
            Hey there, trendsetters of Generation Z! Are you tired of blending in with the masses, wearing the same cookie-cutter outfits everyone else is sporting? Well, we've got a fantastic fashion adventure waiting just for you! Join us in a revolution that's all about celebrating individuality, sustainability, and rocking pre-loved threads with a whole lotta love!
          </p>
        </div>
      </div>

      <Container>
        <br /> <br />
        <BannerCard
          key={`banner--key${elegantHomeBanner.id}`}
          data={elegantHomeBanner}
          href={`${ROUTES.COLLECTIONS}/${elegantHomeBanner.slug}`}
          className="mb-12 md:mb-14 xl:mb-16 pb-0.5 md:pb-0 lg:pb-1 xl:pb-0 md:-mt-2.5"
          classNameInner="md:aspect-[2.9/1] aspect-[2/1]"
        />

        <Subscription className="relative px-5 overflow-hidden sm:px-8 md:px-16 2xl:px-24 sm:items-center lg:items-start" variant="modern" />
      </Container>
    </>
  );
}

Home.getLayout = getLayout;