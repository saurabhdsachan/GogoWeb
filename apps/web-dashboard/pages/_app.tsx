import '../styles/global.css';

import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { PrimaryFont } from 'ui';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.url.ie/',
          siteName: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <div className={`${PrimaryFont.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
