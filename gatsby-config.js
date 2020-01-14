/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Tarang\'s website & blog',
    author: 'Tarang Hirani',
    siteUrl: 'https://taranghirani.com',
    social: {
      twitter: '@tarang9211'
    }
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-favicon',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        logo: './src/static/profile.png',
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/blog`
      }
    }
  ]
}
