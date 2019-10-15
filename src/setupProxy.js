// const proxy = require('http-proxy-middleware');
// module.exports = function (app) {
//   console.log("1111")
//   app.use(proxy('/api', {
//     target: 'http://m.you.163.com',
//     changeOrigin: true,
//     pathRewrite:{
//       "/api":"/"
//     }
//   }));
// };  

const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use('/api', proxy({
    target: 'http://m.you.163.com',
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    }
  }));
};