const {insertservicereg,serviceupdation,ServiceRegistartionselect} = require('./serviceRegistraion.service')


module.exports={
    insertservicereg:(req,res)=>{
        const body=req.body;
        insertservicereg(body,(err,results)=>{
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
                message:"user created succesfully"
            })
        })
      },
      serviceupdation:(req,res)=>{
        const body=req.body;
        serviceupdation(body,(err,results)=>{
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
                message:"servicess updated succesfully"
            })
        })
      },
      ServiceRegistartionselect:(req,res)=>{
        ServiceRegistartionselect((err,results)=>{
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
                data:results
            })
        })
      }
}
