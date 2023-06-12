const {EmpJobMangment} = require('./Jobmanagemnet.service')


module.exports={
    EmpJobMangment:(req,res)=>{
        const body=req.body;
        console.log(body);
        EmpJobMangment(body,(err,results)=>{
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
                message:"job complted successfully"
            })
        })
      },
}