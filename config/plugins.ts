export default ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-azure-sa",
      providerOptions: {
        account: env("AZURE_ACCOUNT_NAME"),
        accountKey: env("AZURE_ACCOUNT_KEY"),
        containerName: env("AZURE_CONTAINER_NAME"),
        defaultPath: env("AZURE_DEFAULT_PATH", "uploads"),
        cdnBaseURL: env("AZURE_CDN_BASE_URL"),
        serviceBaseURL: env("AZURE_SERVICE_BASE_URL"),
        defaultCacheControl: env("AZURE_DEFAULT_CACHE_CONTROL"),
        removeCN: env("AZURE_REMOVE_CN"),
      },
    },
  },
});
