
const router = require("express").Router();
const {insertuser} = require('./usercreation.controller');

router.post('/insert',insertuser);


module.exports=router;