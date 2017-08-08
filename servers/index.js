const mysql=require('mysql');
const config=require('./../configs');
module.exports=function query(sql,action){
    return new Promise((resolve,reject)=>{
        let data;
        const connection=mysql.createConnection(config);
        if(action=="select"){
        	try{
	            connection.query(sql,(err,results,fields)=>{
	            	
	                if(typeof(results[0])!='undefined'){
	                    data=results;
	                }
	                else{
	                    data="null";
	                }
	                resolve(data);
	            });
	        }catch(err){
	            reject(err);
	        }	
        }else if(action=="insert"){
        	try{
	           	connection.query(sql,(err,results,fields)=>{
//	           		console.log(sql);
	                if(results.affectedRows>0){
	                    data=results.affectedRows;
	                }
	                else{
	                    data=0;
	                }
	                resolve(data);
	            });
	        }catch(err){
	            reject(err);
	        }
        }else if(action=="update"){
        	try{
	           	connection.query(sql,(err,results,fields)=>{
//	           		console.log(sql);
	                if(results.affectedRows>0){
	                    data=results.affectedRows;
	                }
	                else{
	                    data=0;
	                }
	                resolve(data);
	            });
	        }catch(err){
	            reject(err);
	        }
        }else if(action=="delete"){
        	try{
	           	connection.query(sql,(err,results,fields)=>{
//	           		console.log(sql);
	                if(results.affectedRows>0){
	                    data=results.affectedRows;
	                }
	                else{
	                    data=0;
	                }
	                resolve(data);
	            });
	        }catch(err){
	            reject(err);
	        }
        }
        
    }); 
}
// module.exports=function verify_email(){

// }