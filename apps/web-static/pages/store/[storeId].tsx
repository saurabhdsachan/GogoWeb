import SEOWrapper from '@components/SEO/SEOWrapper';
import useFetcher from '@hooks/useFetcher';
import { HomePageSEO } from '@utils/SEO';
import { company } from 'common-utils';
import { useEffect } from 'react';
import { Container, FadeIn, FadeInStagger, Layout } from 'ui';

const StoreView = () => {
  const { data, loading, error } = useFetcher({
    endpoint: 'stores/81?populate[0]=qrcodeImage',
  });

  useEffect(() => {
    setTimeout(() => {
      window.location.href = company.app.android;
    }, 3000);
  }, []);

  const response = data?.data?.data || data?.data;

  return (
    <>
      <SEOWrapper seoProps={HomePageSEO.HomeSEO} />
      <Layout>
        <Layout.Header announcement="A brand new experience awaits you. Learn more" />
        <Layout.BodyContent isError={false} isLoading={false}>
          {!loading && (
            <div className="text-center">
              <Container>
                <FadeInStagger>
                  <FadeIn>
                    <img
                      src={
                        response?.attributes?.qrcodeImage?.data?.attributes
                          ?.formats?.medium?.url
                      }
                      alt="Gogo app screen shot"
                      width={300}
                      height={300}
                      className="zIndex-1 relative mx-auto"
                    />
                  </FadeIn>
                  <FadeIn>
                    <h1 className="text-2xl text-gray-900 mt-6 max-w-2xl mx-auto text-center">
                      {response?.attributes?.name}
                    </h1>
                    <a
                      href={`https://www.mygogo.app/store/${response?.id}`}
                      target="_blank"
                      className="text-base text-gray-900 mt-6 max-w-2xl mx-auto text-center"
                    >
                      {`https://www.mygogo.app/store/${response?.id}`}
                    </a>
                  </FadeIn>
                </FadeInStagger>
              </Container>
            </div>
          )}
        </Layout.BodyContent>
        <Layout.Footer />
      </Layout>
    </>
  );
};

export default StoreView;
