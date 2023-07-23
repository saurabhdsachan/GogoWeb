import { company } from 'common-utils';

import commonSEO from './default.config';

const HomePageBaseSEO = {
  canonical: company.url,
  title: 'Hyper-local Simplified | Gogo',
  description: company.description,
};

const openGraph = {
  type: 'website',
  locale: 'en_US',
  url: company.url,
  title: 'Hyper-local Simplified | Gogo',
  description:
    'The ultimate app that empowers offline stores to seamlessly transition into the online realm while unlocking the power of data-driven analytics',
};

const twitter = {
  ...commonSEO.twitterOptions,
  title: 'Hyper-local Simplified | Gogo',
  description:
    'the ultimate app that empowers offline stores to seamlessly transition into the online realm while unlocking the power of data-driven analytics',
};

const additionalLinkTags = [
  {
    key: 'canonical',
    rel: 'canonical',
    href: company.url,
  },
];

const HomeSEO = {
  ...HomePageBaseSEO,
  openGraph,
  twitter,
  additionalLinkTags,
};

const Home = { HomeSEO };

export default Home;
