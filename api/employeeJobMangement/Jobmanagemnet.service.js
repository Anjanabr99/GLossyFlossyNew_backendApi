const mysql = require("mysql");
var pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "handyman_app",
});



module.exports={
    EmpJobMangment:(data,callback)=>{
        pool.query(`
        INSERT INTO emp_job_mangement(emp_id, work_image_before,
             work_image_after, reached_time, job_assitance, assi_emp_id, 
             job_reject, reject_reason, transfer_emp_id,leaving_time) VALUES (?,?,?,?,?,?,?,?,?,?)`,
             [data.emp_id,
                data.work_image_before,
                data.work_image_after,
                data.reached_time,
                data.job_assitance,
                data.assi_emp_id,
                data.job_reject,
                data.reject_reason,
                data.transfer_emp_id,
                data.leaving_time
            ],
            (results,error,feilds)=>{
                if(error){
                    return callback(error)
                }
                return callback(null,results)
            }
        )
    },

    updateEmpJobMangemnt:(data,callback)=>{
        pool.query(`UPDATE emp_job_mangement SET 
        emp_id=?,
        work_image_before=?,
        work_image_after=?,
        reached_time=?,
        job_assitance=?,
        assi_emp_id=?,
        job_reject=?,
        reject_reason=?,
        transfer_emp_id=?,
        leaving_time=? WHERE job_id='?'`,
        [
            data.emp_id,
            data.work_image_before,
            data.work_image_after,
            data.reached_time,
            data.job_assitance,
            data.assi_emp_id,
            data.job_reject,
            data.reject_reason,
            data.transfer_emp_id,
            data.leaving_time,
            data.job_id
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