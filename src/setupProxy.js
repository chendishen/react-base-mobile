const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(createProxyMiddleware('/default', {
    target: 'http://api.baidu.com/', // 转发到的服务器的域名/IP
    pathRewrite: {
      "^/default": ""  // 重写path
    },
    changeOrigin: true
  }));
};