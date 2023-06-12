const router = require("express").Router();
const {insertservicereg,serviceupdation} = require('./serviceRegistration.controller');

router.post('/insert',insertservicereg);
router.patch('/update',serviceupdation);

module.exports=router;