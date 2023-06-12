const router = require("express").Router();

const {EmployeeCreation} = require('./employeeCreation.Controller')

router.post('/empInsert',EmployeeCreation)

module.exports=router;