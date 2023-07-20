module.exports = {
  siteUrl: process.env.WEBSITE_URL,
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/', disallow: '/app/*' }],
  },
  transform: async (config, path) => {
    // custom function to ignore the path
    // if (customIgnoreFunction(path)) {
    //   return null;
    // }

    const result = {
      loc: path,
      changefreq: 'weekly',
      priority: '0.9',
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };

    if (path == '/') result.priority = '1.0';

    if (
      [
        '/about',
        '/ccpa',
        '/disclosure',
        '/eca',
        '/help',
        '/learn',
        '/privacy',
        '/terms',
      ].includes(path)
    ) {
      result.changefreq = 'monthly';
      result.priority = '0.8';
    }

    return result;
  },
};
