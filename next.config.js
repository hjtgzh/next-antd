// const withLess = require('@zeit/next-less');

// // fix: prevents error when .less files are required by node
// if (typeof require !== 'undefined') {
//   require.extensions['.less'] = file => {};
// }

// module.exports = withLess({
//   cssModules: true,
//   cssLoaderOptions: {
//     importLoaders: 1,
//     localIdentName: '[name]___[local]--[hash:base64:5]'
//   },
//   lessLoaderOptions: {
//     javascriptEnabled: true
//   }
// });

// 解决antd无法使用cssmodule
const withNextAntdLess = require('./next-antd-less.config');
module.exports = withNextAntdLess({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[name]___[local]--[hash:base64:5]'
  },
  lessLoaderOptions: {
    javascriptEnabled: true
  }
});
