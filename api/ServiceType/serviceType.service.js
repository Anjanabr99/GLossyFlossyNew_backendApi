const mysql = require("mysql");
var pool = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:'handyman_app',
});



module.exports={
    getserviceType:(callback)=>{
        pool.query(`select * from services`,
        [],
        (error,results,feilds)=>{
            if(error){
              return callback(error)
            }
            return callback(null,results);
          } 
          )
      },

      getservicename:(id,callback)=>{
        pool.query(`select * from service_name where name_slno =?`,
        [id],
        (error,results,feilds)=>{
            if(error){
              return callback(error)
            }
            return callback(null,results);
          }
        )
      },

      getservicesubcription :(id,callback)=>{
        pool.query(`select * from serv_subscription where serv_type_slno =?`,
        [id],
        (error,results,feilds)=>{
          if(error){
            return callback(error)
          }
          return callback(null,results);
        } 
        )
      },
      getrequirement:(callback)=>{
        pool.query(`select * from requirement`,[],
        (error,results,feilds)=>{
          if(error){
            return callback(error)
          }
          return callback(null,results)
        }
        )
      }

}