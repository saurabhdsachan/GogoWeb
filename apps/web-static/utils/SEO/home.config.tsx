import { company } from 'common-utils';

import commonSEO from './default.config';

const HomePageBaseSEO = {
  canonical: company.url,
  title: 'Cash Advance | Get Instant Cash with Gogo',
  description: company.description,
};

const openGraph = {
  type: 'website',
  locale: 'en_US',
  url: company.url,
  title: 'Cash Advance | Get Instant Cash with Gogo',
  description:
    'Gogo helps working-class Americans get $20 - $1,000 instant cash without interest or credit checks. Get instant cash now and pay later. Plans start at $2.47/month.',
};

const twitter = {
  ...commonSEO.twitterOptions,
  title: 'Cash Advance | Get Instant Cash with Gogo',
  description:
    'Gogo helps working-class Americans get $20 - $1,000 instant cash without interest or credit checks. Get instant cash now and pay later. Plans start at $2.47/month.',
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
