const siteAddress = new URL("https://forolagnia.com")

module.exports = {
  pathPrefix: "/taxes",
  plugins: [
    {
      resolve: 'gatsby-plugin-material-ui',
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-37Z2QSN476'],
      }
    },
    'gatsby-plugin-top-layout',
    `gatsby-plugin-typescript`,
  ],
  siteMetadata: {
    title: 'Forolagnia',
    description: 'Forolagnia is Aftertax on steroids',
    image: "/images/icon.jpg",
    lang: 'en',
    url: siteAddress.hostname,
  },
};
