import Features from '@components/Features';
import Hero from '@components/Hero';
import SEOWrapper from '@components/SEO/SEOWrapper';
import Testimonials from '@components/Testimonials';
import { HomePageSEO } from '@utils/SEO';
import { Layout } from 'ui';

export default function Web() {
  return (
    <>
      <SEOWrapper seoProps={HomePageSEO.HomeSEO} />
      <Layout>
        <Layout.Header announcement="Ab kare business apni sharton par" />
        <Layout.BodyContent isError={false} isLoading={false}>
          <Hero />
          <Features />
          <Testimonials />
        </Layout.BodyContent>
        <Layout.Footer />
      </Layout>
    </>
  );
}
