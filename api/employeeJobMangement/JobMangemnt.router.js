const router = require("express").Router();
const {EmpJobMangment}  = require('./Jobmangemnt.controller')

router.post('/insertyyy',EmpJobMangment)

module.exports=router;