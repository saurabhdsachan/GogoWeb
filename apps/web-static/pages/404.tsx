import { imageLoader } from 'common-utils/helpers';
import Head from 'next/head';
import Image from 'next/image';
import { Container, Layout } from 'ui';

const Custom404 = () => {
  return (
    <Layout>
      <Head>
        <title>400 | Gogo</title>
      </Head>
      <Layout.BodyContent isError={false} isLoading={false}>
        <Container>
          <div className="relative flex h-full w-full items-center justify-center">
            <Image
              loader={imageLoader}
              src=""
              alt="400"
              width={250}
              height={200}
            />
          </div>
        </Container>
      </Layout.BodyContent>
    </Layout>
  );
};

export default Custom404;
