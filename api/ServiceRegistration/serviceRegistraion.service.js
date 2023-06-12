const mysql = require("mysql");
var pool = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:'handyman_app',
});


module.exports={
 insertservicereg:(data,callback)=>{
    pool.query(`insert into service_reg 
    (
        user_id,
        serv_nameSlno,
        serv_type,
        requment_type,
        subcrpn_type,
        location,
        booking_date
    )values(?,?,?,?,?,?,?)`,
    [
     data. user_id,
     data.serv_nameSlno,
     data.serv_type,
     data.requment_type,
     data.subcrpn_type,
     data.location,
     data.booking_date
    ],
    (error,results,feilds)=>{
        if(error){
            return callback(error)
        }
        return callback(null,results)
    }
   )
 },

 
 serviceupdation:(data,callback) =>{
pool.query(`update service_reg set 
user_id =?,
serv_nameSlno =?,
serv_type =?,
requment_type=?,
subcrpn_type =?,
location=?,
booking_date=?
where reg_slno =?`,
[data. user_id,
    data.serv_nameSlno,
    data.serv_type,
    data.requment_type,
    data.subcrpn_type,
    data.location,
    data.booking_date,
    data.reg_slno],
    (error,results,feilds)=>{
        if(error){
            return callback(error)
        }
        return callback(null,results)
    }
)

 },
ServiceRegistartionselect:(callback)=>{
    pool.query(`select user_id, user_name,
    serv_nameSlno,
    serv_name,
    serv_type,
    service_type,
    requment_type,
    subcrpn_type,
    location,
    booking_date 
    from service_reg
    left join services on service_reg.serv_type = services.serv_slno
    left join user_creation on service_reg.user_id = user_creation.id 
    left join service_name on service_reg.serv_nameSlno = service_name.name_slno
    left join services on service_reg.serv_type =services.serv_slno`)
}
}