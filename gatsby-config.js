const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [
          require('postcss-easy-import'),
          autoprefixer({
            browsers: ['last 2 versions']
          })
        ]
      },
      precision: 8
    }
  ]
}
