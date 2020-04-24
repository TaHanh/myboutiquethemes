// next.config.js 
// const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass')
// module.exports = withCSS({
//   cssLoaderOptions: {
//     url: false
//   }
// });


const nextConfig = {
   distDir: './src/next',
   useFileSystemPublicRoutes: false,
   webpack: (config, options) => {
   
     return config;
   },
 };

module.exports = withPlugins(
   [
      [
         withSass, // if you have other options go this way
         {
           cssModules: true,
           cssLoaderOptions: {
             localIdentName: '[path]___[local]___[hash:base64:5]',
           },
         },
       ],
   ],
   nextConfig
)
// module.exports = {
//    distDir: '../dist',
//    assetPrefix: process.env.ASSET_PREFIX || '/',
//    publicRuntimeConfig: {
//    },
//    pagesDir: './src/pages',
//    withSass: withSass({
//       // cssModules: true
//    })
//  }
// module.exports = withSass({
//    // cssModules: true
// })
