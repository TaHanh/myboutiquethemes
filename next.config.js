// next.config.js 
// const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')

// module.exports = withCSS({
//   cssLoaderOptions: {
//     url: false
//   }
// });


const nextConfig = {
   // // distDir: "../.next",
   // distDir: './src/next',
   // useFileSystemPublicRoutes: false,
   // webpack: (config, options) => {
   
   //   return config;
   // },
   devIndicators: {
      autoPrerender: false,
    },
 };

module.exports = withPlugins(
   [
      [
         withSass({
            // cssModules: true,
         }),
       ],
      withImages
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

