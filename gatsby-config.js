const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
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