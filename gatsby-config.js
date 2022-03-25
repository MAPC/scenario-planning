module.exports = {
  siteMetadata: {
    siteUrl: "https://www.scenario-planning.mapc.org",
    title: "Scenario Planning",
    description: "How Do We Plan for an Uncertain Future?",
    author: "@MAPC",
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-8EYCJYR1W7"
        ],
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      },
    },
  ],
};