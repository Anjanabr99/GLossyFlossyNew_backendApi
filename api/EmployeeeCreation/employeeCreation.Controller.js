const {EmployeeCreation} = require('./emplueeCreation.service');

module.exports={
    EmployeeCreation:(req,res)=>{
        const body=req.body;
        EmployeeCreation(body,(err,results)=>{
              if(err){
                return res.status(400).json({
                    success:0,
                    message:err
                })
            }
            else if(results.length==0){
                return res.status(200).json({
                    success:1,
                    message:"no records"
                })
            }
            return res.status(200).json({
                success:2,
                message:"New Employee is Created"
            })
        })
      },
}