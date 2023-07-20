import Head from 'next/head';
import { Container, EmptyState, Layout } from 'ui';

export default function WebApp() {
  return (
    <Layout>
      <Head>
        <title>Instant cash for emergencies | Gogo</title>
      </Head>
      <Layout.Header announcement="A brand new experience awaits you. Learn more" />
      <Layout.BodyContent isError={false} isLoading={false}>
        <Container>
          <EmptyState />
        </Container>
      </Layout.BodyContent>
      <Layout.PreFooter />
      <Layout.Footer />
    </Layout>
  );
}
