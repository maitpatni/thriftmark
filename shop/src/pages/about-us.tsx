import { getLayout } from '@components/layout/layout-three';
export { getStaticProps } from '@framework/homepage/standard';

export default function AboutUsPage() {
  
    return (
        <>
            <img className="w-full" src="/assets/images/about-us/about-us-section-1.png" />
            

                <div className="mt-10 xl:mt-28 lg:mt-16 md:mt-10">
                    <h2 className="text-center text-[#F05840] font-bold text-3xl xl:text-6xl lg:text-5xl md:text-4xl mb-3 xl:mb-5 lg:mb-5 md:mb-4">About Us</h2>
                    <p className="text-justify md:text-center text-[#F05840] text-base px-5 md:text-xl xl:px-80 lg:px-40 md:px-20">
                        At Thriftmark, we believe that fashion shouldn't come at the cost of the environment. We are passionate about reducing waste and promoting sustainable fashion choices. Our platform serves as a online thrifting marketplace, bringing together a diverse community of fashion enthusiasts who share our values.
                    </p>
                </div>

                <img className="w-full" src="/assets/images/about-us/about-us-section-3.svg" />


                <div className="flex flex-col md:flex-row justify-between">
                    {renderIconSection('about-us-icon1.svg', 'Less is More', 'Break the cycle of overconsumption. Embrace the art of mindful fashion by giving preloved clothes a chance to shine.')}
                    {renderIconSection('about-us-icon2.svg', 'Good Quality', 'Step off the fast fashion treadmill. Embrace simplicity, choose quality, and rediscover the joy of preloved treasures.')}
                    {renderIconSection('about-us-icon3.svg', 'More Sustainable', 'Small changes, big impact. Embrace preloved clothes and create a fashion statement that\'s kind to the planet.')}
                </div>

                <div className="-mb-20 2xl:-mb-[30rem] xl:-mb-80 lg:-mb-72 md:-mb-40">
                    <svg viewBox="0 0 145.45 51.9">
                        <path fill="#5d64ab" d="M145.45 51.9H0V9.42C8.94 5.89 18.36 3.56 28 2.5 42.14.96 53.14 2.61 68.36 5c23.18 3.64 26.22 6.83 40.97 7.84 15.36 1.04 28.04-1.34 36.12-3.41V51.9Z"/>
                    </svg>
                </div>

                <div className="bg-[#5D64AB] flex flex-col lg:flex-row xl:px-20 lg:px-10 lg:pb-20">
                    <div className="flex-initial mb-4 xl:mb-0 self-center">
                        <img src="/assets/images/about-us/our-story-section.png" className="grow w-full lg:w-screen 2xl:w-[70vw] p-10 lg:p-0" />
                    </div>
                <div className="flex-initial px-10 pb-20 lg:pb-0 xl:pl-20 self-center">
                    <h3 className="text-white font-medium text-center lg:text-left text-5xl 2xl:text-6xl font-semibold mb-5">Our Story</h3>
                    <p className="text-white text-justify text-xl lg:text-base 2xl:text-2xl">
                        At Thriftmark, we believe that fashion shouldn't come at the cost of the environment. We are passionate about reducing waste and promoting sustainable fashion choices. Our platform serves as a virtual thrift store, bringing together a diverse community of fashion enthusiasts who share our values.<br /><br />
                        Selling your clothes is as easy as a few clicks with our intuitive selling feature. By giving your pre-owned garments a new life, you contribute to a circular economy and join us in making a positive impact on the planet. Our platform is designed to make the selling process hassle-free, empowering you to become a sustainable fashion entrepreneur effortlessly.<br /><br />
                        We are a vibrant community of like-minded individuals who appreciate the beauty of preloved fashion. Connect with fellow fashion lovers, share your unique style, and get inspired by the creativity that thrives within our community.<br /><br />
                        Join us on this exciting journey of embracing thrift fashion and reimagining the way we shop. Together, we can make a difference.
                    </p>
                </div>
            </div>
        </>
    );
}

function renderIconSection(imageSrc, title, description) {
    return (
        <div className="flex flex-col items-center px-5 pb-10 md:p-0 lg:px-10 lg:mb-10">
            <img className="h-20 xl:mb-2" src={`/assets/images/about-us/${imageSrc}`} alt={title} />
            <h3 className="text-[#5D64AB] font-semibold text-2xl xl:text-4xl lg:text-3xl text-center mb-2">{title}</h3>
            <p className="text-[#5D64AB] text-center">{description}</p>
        </div>
    );
}

AboutUsPage.getLayout = getLayout;