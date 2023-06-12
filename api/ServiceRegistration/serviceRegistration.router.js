const express=require('express')
const router = express.Router();
const {insertservicereg,serviceupdation,ServiceRegistartionselect} = require('./serviceRegistration.controller');

router.post('/insert',insertservicereg);
router.patch('/update',serviceupdation);
router.get('/select',ServiceRegistartionselect);
module.exports=router;