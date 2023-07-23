import { FadeIn, FadeInStagger } from '@components/framerAnimation/fadeIn';
import Head from 'next/head';
import React from 'react';
import { AppFlexWrapper, Container, Layout } from 'ui';

const DeliveryRule = () => {
  return (
    <Layout>
      <Head>
        <title>Hypersonic growth for hyper-local | Gogo</title>
      </Head>
      <Layout.Header announcement="A brand new experience awaits you. Learn more" />
      <Layout.BodyContent isError={false} isLoading={false}>
        <AppFlexWrapper flow="t">
          <AppFlexWrapper.Body>
            <Container>
              <FadeInStagger faster>
                <FadeIn>
                  <h2 className="text-lg">Delivery Rules</h2>
                </FadeIn>
                <FadeIn />
              </FadeInStagger>
            </Container>
          </AppFlexWrapper.Body>
          <AppFlexWrapper.Footer>Footer</AppFlexWrapper.Footer>
        </AppFlexWrapper>
      </Layout.BodyContent>
    </Layout>
  );
};

export default DeliveryRule;
