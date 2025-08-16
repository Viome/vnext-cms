export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "https://market-assets.strapi.io",
            `https://${process.env.STORAGE_ACCOUNT}.blob.core.windows.net`,
            `https://${process.env.AZURE_CDN_STRAPI_DOMAIN}`
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            `https://${process.env.STORAGE_ACCOUNT}.blob.core.windows.net`,
            `https://${process.env.AZURE_CDN_STRAPI_DOMAIN}`
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
