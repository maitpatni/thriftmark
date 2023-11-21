import Container from '@components/ui/container';
import { getLayout } from '@components/layout/layout';
import '@fontsource/italiana';

export { getStaticProps } from '@framework/homepage/standard';

export default function Home() {
  return (
    <>
      <div
        className="flex items-center justify-center h-[100vh] mb-18 md:mb-50"
        style={{
          backgroundImage: 'url("/assets/images/homepage/home-page-section-4.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '0 25vw'
        }}
      >
        <div className="text-center">
          <h2 className="text-[#535BA3] font-bold mt-10 mb-4" style={{ fontSize: '65px', lineHeight: '1em', fontFamily: "'Italiana', sans-serif" }}>Coming Soon</h2>
        </div>
      </div>
    </>
  );
}

Home.getLayout = getLayout;