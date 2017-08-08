var koa = require('koa');
var routers = require('./routers');
var views = require('co-views');
var koa_static = require('koa-static-server');

const app = new koa();

app.use(koa_static({
    rootDir:'./static',
    rootPath:'./static',
    maxage:0
}));

routers(app);

app.listen(3000);
console.log('koa server is started at 3000 port!');