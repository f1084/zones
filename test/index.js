var mysql=require('mysql');
var config=require('./../configs');
console.log(config);
function connect(){
    let connection=mysql.createConnection(config);
    console.log(connection);
    let sql="select * from article";
    return new Promise((resolve,reject)=>{
        let data;
        try{
            connection.query(sql,(err,results,fields)=>{
                console.log(results);
                // if(typeof(results[0])!='undefined'){
                     data=results;
                // }
                // else{
                //     data="null";
                // }
                resolve(data);
            });
        }catch(err){
            reject(err);
        }
    })
}
// function connect(){
//     const pool=mysql.createPool(config);
//     let sql="select * from article";
//     let query = function( sql, values ) {
//     return new Promise(( resolve, reject ) => {
//         pool.getConnection(function(err, connection) {
//         if (err) {
//             reject( err )
//         } else {
//             connection.query(sql, values, ( err, rows) => {

//             if ( err ) {
//                 reject( err )
//             } else {
//                 resolve( rows )
//             }
//             connection.release()
//             })
//         }
//         })
//     })
//     }
// }
let res=connect();
console.log(res);