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
        (user_fname,
        email,
        user_dob,
        phone,
        address,
        user_lname,
        user_password)
        values(?,?,?,?,?,?,?)`,
        [
            data.user_fname,
            data.email,
            data.user_dob,
            data.phone,
            data.address,
            data.user_lname,
            data.user_password
        ],
       (error,results,feilds)=>{
          if(error){
            return callback(error)
          }
          return callback(null,results);
        } 
        )
    },

    updateuser:(data,callback)=>{
      pool.query(`update user_creation set 
      user_fname =?,
        email =?,
        user_dob =?,
        phone=?,
        address=?,
        user_lname=?,
        user_password=?
        where id=?`, 
        [
          data.user_fname,
          data.email,
          data.user_dob,
          data.phone,
          data.address,
          data.user_lname,
          data.user_password,
          data.id
        ],
        (error,results,feilds)=>{
          if(error){
            return callback(error)
          }
          return callback(null,results);
        }
      )
    }
  }