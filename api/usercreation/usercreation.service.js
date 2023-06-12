const mysql = require("mysql");
var pool = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:'handyman_app',
});


module.exports={
    insertuser:(data,callback)=>{
        pool.query(`insert into user_creation
        (user_name,
        email,
        age,
        phone,
        address,
        is_employeee)
        values(?,?,?,?,?,?)`,
        [
            data.user_name,
            data.email,
            data.age,
            data.phone,
            data.address,
            data.is_employeee
        ],
       (error,results,feilds)=>{
          if(error){
            return callback(error)
          }
          return callback(null,results);
        } 
        )
    },
}