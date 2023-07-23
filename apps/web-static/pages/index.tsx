import Features from '@components/Features';
import Hero from '@components/Hero';
import SEOWrapper from '@components/SEO/SEOWrapper';
import Testimonials from '@components/Testimonials';
import { HomePageSEO } from '@utils/SEO';
import Head from 'next/head';
import { useEffect } from 'react';
import { Layout } from 'ui';

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
          <title>Hyper-local re-imagined | Gogo</title>
        </Head>
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
