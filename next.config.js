// next.config.js
const withCSS = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const withFonts = require('nextjs-fonts')
// module.exports = withCSS({
//   cssLoaderOptions: {
//     url: false
//   }
// });

const nextConfig = {
  // // distDir: "../.next",
  // distDir: './src/next',
  // useFileSystemPublicRoutes: false,
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: ['file-loader'],
    })
    return config
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          // 'sass-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                outputStyle: 'compressed',
              },
            },
          },
        ],
      },
    ],
  },
  devIndicators: {
    autoPrerender: false,
  },
}

module.exports = withPlugins(
  [
    [
      withSass({
        webpack(config, options) {
          config.module.rules.push({
            test: /\.s?css$/,
          })
          return config
        },
      }),
    ],
    withImages,
    withFonts,
    withCSS,
  ],
  nextConfig
)
