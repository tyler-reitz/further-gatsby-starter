const autoprefixer = require('autoprefixer')
const pixrem = require('pixrem')

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [
          // pixrem(),
          autoprefixer({
            browsers: ['last 2 versions']
          })
        ]
      },
      precision: 8
    }
  ]
}