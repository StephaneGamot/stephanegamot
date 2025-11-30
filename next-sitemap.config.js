/** @type {import('next-sitemap').IConfig} */

const siteUrl = "https://www.stephanegamot.com";

const config = {
  siteUrl,
  generateRobotsTxt: true,

  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = "monthly";

    if (path === "/") {
      priority = 1.0;
      changefreq = "weekly";
    } else if (path === "/contact") {
      priority = 0.8;
      changefreq = "monthly";
    } else if (path.startsWith("/blog")) {
      priority = 0.8;
      changefreq = "weekly";
    } else if (path.startsWith("/portfolio")) {
      priority = 0.7;
      changefreq = "monthly";
    }

    return {
      loc: `${siteUrl}${path}`,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    // ❌ plus de additionalSitemaps ici
  },
};

module.exports = config;
