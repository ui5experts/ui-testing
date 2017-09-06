const express = require('express');
const app = require('express')();
const proxyMiddleware = require('http-proxy-middleware');
const backstop = require('backstopjs');

// statically serve webapp folder, use test.html as index
app.use(express.static('webapp', { index: 'test.html' }));

// proxy resources and test-resources from CDN, add specific version if needed
app.use(proxyMiddleware('/resources/**', {
  target: 'https://sapui5.hana.ondemand.com/',
  changeOrigin: true
}));
app.use(proxyMiddleware('/test-resources/**', {
  target: 'https://sapui5.hana.ondemand.com/',
  changeOrigin: true
}));

// start server
app.listen(3000, function () {
  console.log('Express server listening on port 3000!');
  console.log('Starting backstop tests');
  backstop('test')
    .then(function () {
      process.exit();
    }).catch(function () {
      process.exit(1);
    });
});
