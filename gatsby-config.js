/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Waneroo Basketball Association`,
    description: ``,
    author: `Ordinary Agency`,
    siteUrl: `https://ordinaryagency.com.au`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://ordinaryseo.com.au/wbawp/graphql`,
        html: {
          useGatsbyImage: true,
        },
        schema : {
          perPage: 50,
          timeout: 60000,

        },
      },
    },
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.SHOPIFY_ADMIN_ACCESS_TOKEN,
        storeUrl: process.env.GATSBY_MYSHOPIFY_URL,
        //salesChannel: process.env.SHOPIFY_APP_ID, // Optional but recommended
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/wolveslogo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}