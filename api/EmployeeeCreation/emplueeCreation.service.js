const mysql = require("mysql");
var pool = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:'handyman_app',
});


module.exports={
    EmployeeCreation:(data,callback) =>{
        pool.query(`
        insert into emp_creation
       (emp_firstname, 
        emp_middlename, 
        emp_lastname, 
        emp_dob,
        emp_password,
       
        emp_phone,
        emp_address)
        values(?,?,?,?,?,?,?)`,
        [
            data.emp_firstname,
            data.emp_firstname, 
            data.emp_middlename, 
            data.emp_lastname, 
            data.emp_dob, 
            data.emp_password, 
            // data.emp_image,
            data.emp_phone, 
            data.emp_address
        ],
        (results,error,feilds)=>{
            if(error){
                return callback(error)
            }
            return callback(null,results)
        }
        )
    }
}