import Container from "@components/ui/container";
import { getLayout } from "@components/layout/layout";
// import PageHeader from "@components/ui/page-header";
import ContactForm from "@components/common/form/contact-form";
import { useTranslation } from "next-i18next";

export { getStaticProps } from "@framework/common.ssr";

export default function ContactUsPage() {
  const { t } = useTranslation("common");
  return (
    <>
      {/* <PageHeader pageHeader="text-page-contact-us" /> */}
      <Container>
        <div className="flex justify-center my-16 h-40 md:h-60">
          <img src="/assets/images/contact-us/contact-us-image.svg" alt="Icon 1"/>
          </div>
          <div className="text-center text-2xl mb-14">For further queries please write to us at <a href="mailto:admin@thriftmark.in">admin@thriftmark.in</a></div>
          <div className="mx-5 lg:mx-20 xl:mx-60 2xl:mx-80 mb-20">
            <ContactForm />
          </div>
      </Container>
    </>
  );
}

ContactUsPage.getLayout = getLayout;
