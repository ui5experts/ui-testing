// https://gist.github.com/cschuff/6f23b61622b41fdaa3c01623e530b845

const express = require('express');
const url = require('url');
const proxy = require('proxy-middleware');
const app = express();


const ui5Origin = 'https://sapui5.hana.ondemand.com/1.44.31';
// const ui5Origin = 'https://openui5.hana.ondemand.com/1.44.31';
// const ui5Origin = 'https://[BACKEND_HOST]:[BACKEND_PORT]/sap/public/bc/ui5_ui5/1.44';

const backend = 'https://[BACKEND_HOST]:[BACKEND_PORT]';


// statically serve webapp folder, use test.html as index (as used in SAP Web IDE templates)
app.use(express.static('webapp', { index: 'test.html' }));

// proxy resources and test-resources from remote location
let proxyOptions = url.parse(`${ui5Origin}/resources`); 
proxyOptions.cookieRewrite = true; 
app.use('/resources', proxy(proxyOptions));  

proxyOptions = url.parse(`${ui5Origin}/test-resources`); 
proxyOptions.cookieRewrite = true; 
app.use('/test-resources', proxy(proxyOptions));  

// proxy backend
proxyOptions = url.parse(`${backend}/sap`); 
proxyOptions.cookieRewrite = true; 
app.use('/sap', proxy(proxyOptions));

// start server
const port = 8001;
const server =     app.listen(port, () => console.log(`Express server listening on port ${port}`));

module.exports = server;
