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
  devIndicators: {
    autoPrerender: false,
  },
}

module.exports = withPlugins(
  [
    [
      withSass({
        //    webpack (config, options) {
        //       config.module.rules.push({
        //           test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        // //use: ["file-loader"]
        //           use: {
        //               loader: 'file-loader',
        //               options: {
        //                   limit: 100000,
        //                   name: '[name].[ext]',
        //               }
        //           }
        //       })
        //       return config
        //   }
      }),
    ],
    withImages,
    withFonts,
    withCSS,
  ],
  nextConfig
)
// module.exports = {
//    distDir: '../dist',
//    assetPrefix: process.env.ASSET_PREFIX || '/',
//    publicRuntimeConfig: {
//    },
//    pagesDir: './src/pages',
//  }
