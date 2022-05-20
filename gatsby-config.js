/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/brizzledev-gatsby",
  /* Your site config here */
  siteMetadata: {
    title: `brizzledev-gatsby`,
    siteUrl: `https://portfolio.brizzle.dev`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      'accessToken': process.env.GATSBY_ACCESS_TOKEN,
      'spaceId': process.env.GATSBY_SPACE_ID
    }
  },
  'gatsby-plugin-image',
  'gatsby-plugin-sass',
  'gatsby-plugin-recaptcha',
  `gatsby-transformer-remark`
],
}
