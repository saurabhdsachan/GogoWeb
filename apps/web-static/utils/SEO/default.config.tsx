import { company } from 'common-utils';

const defaultTitle = company.tagLine;

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: company.product,
  brand: company.product,
  legalName: company.productWithTM,
  url: company.url,
  logo: company.logo,
  founders: [
    {
      '@type': 'Person',
      name: 'Nitin J',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.address[0].location1,
    addressLocality: company.address[0].location2,
    addressRegion: company.address[0].state,
    postalCode: company.address[0].pin,
    addressCountry: company.address[0].country,
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      telephone: company.support.phone,
      email: company.support.email,
    },
  ],
  sameAs: [Object.values(company.social.sites)],
};

const openGraph = {
  type: 'website',
  locale: 'en_US',
  url: company.url,
  title: `${company.product} - ${company.tagLine}`,
  description: company.description,
  images: [
    {
      url: '',
      width: 1300,
      height: 750,
      alt: 'Gogo',
    },
  ],
  siteName: company?.product,
};

const twitterOptions = {
  handle: company?.social?.handles?.twitter,
  site: company?.social?.handles?.twitter,
  cardType: 'summary_large_image',
  content: company.tagLine + ':' + company.description,
  image: '',
};

//// Meta section
const AppleMeta = [
  {
    key: 'appleMobileWebCapable',
    name: 'apple-mobile-web-app-capable',
    content: 'yes',
  },
  {
    key: 'appleTouchFullScreen',
    content: 'yes',
    name: 'apple-touch-fullscreen',
  },
  {
    key: 'appleStatusBar',
    name: 'apple-mobile-web-app-status-bar-style',
    content: 'black',
  },
  { key: 'formatDetection', name: 'format-detection', content: 'telephone=no' },
];

const IEMeta = [
  {
    key: 'msapplicationStartUrl',
    name: 'msapplication-starturl',
    content: '/',
  },
  {
    key: 'msapplication-TileColor',
    name: 'msapplication-TileColor',
    content: '#ffffff',
  },
  {
    key: 'msapplicationLogo',
    name: 'msapplication-square310x310logo',
    content: '/icons/ms-icon-310x310.png',
  },
  {
    key: 'msapplication-TileImage',
    name: 'msapplication-TileImage',
    content: '/icons/ms-icon-144x144.png',
  },
];

const additionalMetaTags = [
  { key: 'language', name: 'language', content: 'ES' },
  { key: 'subject', name: 'subject', content: company.description },
  { key: 'url', name: 'url', content: company.url },
  { key: 'identifierURL', name: 'identifier-URL', content: company.url },
  { key: 'category', name: 'category', content: company?.keywords.join(',') },
  { key: 'coverage', name: 'coverage', content: 'Worldwide' },
  { key: 'mobileWebCapable', name: 'mobile-web-app-capable', content: 'yes' },
  { key: 'themeColor', name: 'theme-color', content: '#ffffff' },
  {
    key: 'sourceOrganization',
    name: 'sourceOrganization',
    content: company.product,
  },
  { key: 'topic', name: 'topic', content: company.description },
  { key: 'summary', name: 'summary', content: company.description },
  ...AppleMeta,
  ...IEMeta,
];

// // Link Section
const AppleLink = [
  {
    key: 'apple-touch-icon0',
    rel: 'apple-touch-icon',
    sizes: '192x192',
    href: '/icons/apple-icon.png',
  },
  {
    key: 'apple-touch-icon1',
    rel: 'apple-touch-icon',
    sizes: '57x57',
    href: '/icons/apple-icon-57x57.png',
  },
  {
    key: 'apple-touch-icon2',
    rel: 'apple-touch-icon',
    sizes: '60x60',
    href: '/icons/apple-icon-60x60.png',
  },
  {
    key: 'apple-touch-icon3',
    rel: 'apple-touch-icon',
    sizes: '72x72',
    href: '/icons/apple-icon-72x72.png',
  },
  {
    key: 'apple-touch-icon4',
    rel: 'apple-touch-icon',
    sizes: '76x76',
    href: '/icons/apple-icon-76x76.png',
  },
  {
    key: 'apple-touch-icon5',
    rel: 'apple-touch-icon',
    sizes: '114x114',
    href: '/icons/apple-icon-114x114.png',
  },
  {
    key: 'apple-touch-icon6',
    rel: 'apple-touch-icon',
    sizes: '120x120',
    href: '/icons/apple-icon-120x120.png',
  },
  {
    key: 'apple-touch-icon7',
    rel: 'apple-touch-icon',
    sizes: '144x144',
    href: '/icons/apple-icon-144x144.png',
  },
  {
    key: 'apple-touch-icon8',
    rel: 'apple-touch-icon',
    sizes: '152x152',
    href: '/icons/apple-icon-152x152.png',
  },
  {
    key: 'apple-touch-icon9',
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/icons/apple-icon-180x180.png',
  },
  {
    key: 'apple-icon-precomposed',
    rel: 'apple-touch-icon',
    sizes: '192x192',
    href: '/icons/apple-icon-precomposed.png',
  },
];

const additionalLinkTags = [
  {
    key: 'icon-192',
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '/icons/android-icon-192x192.png',
  },
  {
    key: 'icon-32',
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/icons/favicon-32x32.png',
  },
  {
    key: 'icon-96',
    rel: 'icon',
    type: 'image/png',
    sizes: '96x96',
    href: '/icons/favicon-96x96.png',
  },
  {
    key: 'icon-16',
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/icons/favicon-16x16.png',
  },
  ...AppleLink,
];

const defaultSEO = {
  defaultTitle,
  openGraph,
  twitterOptions,
  additionalMetaTags,
  additionalLinkTags,
};

const commonSEO = { defaultSEO, organizationSchema, twitterOptions };

export default commonSEO;
