import Hero from '@components/Hero';
import SEOWrapper from '@components/SEO/SEOWrapper';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid';
import { HomePageSEO } from '@utils/SEO';
import Head from 'next/head';
import { useEffect } from 'react';
import { ScrollTrigger } from 'react-gsap';
import { Container, Layout } from 'ui';

import useFetcher from '../hooks/useFetcher';

export default function Web() {
  const { data, error, loading } = useFetcher({ endpoint: '/todos/1' });

  useEffect(() => {
    console.log(data, error, loading);
  }, [data, error, loading]);

  return (
    <>
      <SEOWrapper seoProps={HomePageSEO.HomeSEO} />
      <Layout>
        <Head>
          <title>Instant cash for emergencies | Gogo</title>
        </Head>
        <Layout.Header announcement="A brand new experience awaits you. Learn more" />
        <Layout.BodyContent isError={false} isLoading={false}>
          <ScrollTrigger start="-500px center" end="-100px center">
            <Hero />
            <Container>
              <ChevronDoubleDownIcon className="h-5 w-5 mx-auto mt-4 hidden md:block bounce" />
            </Container>
          </ScrollTrigger>
        </Layout.BodyContent>
        <Layout.PreFooter />
        <Layout.Footer />
      </Layout>
    </>
  );
}
