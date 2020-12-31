module.exports = (themeOptions) => ({
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Open Sans',
            variants: ['400', '700']
          }
        ]
      }
    },
    // {
    //   resolve: 'gatsby-source-prismic',
    //   /* eslint-disable global-require */
    //   options: {
    //     repositoryName: themeOptions.prismicRepository,
    //     schemas: {}
    //   }
    // }
  ]
});
