const router = require("express").Router();
const {EmpJobMangment}  = require('./Jobmangemnt.controller')

router.post('/insert',EmpJobMangment)

module.exports=router;