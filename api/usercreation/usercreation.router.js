
const router = require("express").Router();
const {insertuser,updateuser} = require('./usercreation.controller');

router.post('/userinsert',insertuser);
router.patch('/updateuser',updateuser);


module.exports=router;