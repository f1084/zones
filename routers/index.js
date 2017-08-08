const servers= require('./../servers');

var route = require('koa-route');
var views =  require('co-views');

const render = views('./view',{
    map:{ html:'ejs'}
})

module.exports=function(app){
    app.use(route.get('/v1/articlelist', async(ctx)=>{
        let sql="select * from article";
        let res=await servers(sql,"select");
        ctx.body=res;
    }));


    
}