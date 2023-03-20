const siteAddress = new URL("https://forolagnia.com")

module.exports = {
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
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Forolagnia`,
        short_name: `Foroi`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#f7f0eb`,
        display: `standalone`,
        icon: "src/images/icon.png",
      },
    },
    'gatsby-plugin-top-layout',
    `gatsby-plugin-typescript`,
  ],
  siteMetadata: {
    title: 'Forolagnia',
    description: 'Forolagnia is Aftertax on steroids',
    image: "icon.png",
    lang: 'en',
    url: siteAddress.hostname,
  },
};
