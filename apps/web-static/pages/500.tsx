import Head from 'next/head';
import { Container, ErrorState, Layout } from 'ui';

const Custom500 = () => {
  return (
    <Layout>
      <Head>
        <title>500 | Gogo</title>
      </Head>
      <Layout.BodyContent isError={false} isLoading={false}>
        <Container>
          <ErrorState />
        </Container>
      </Layout.BodyContent>
    </Layout>
  );
};

export default Custom500;
