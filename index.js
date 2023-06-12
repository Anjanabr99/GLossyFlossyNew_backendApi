const express = require('express');
const app = express();
app.use(express.json());
// const mysql = require("mysql");



const bodyParser = require('body-parser');
app.use(bodyParser.json());
const usercreationRouter  = require('./api/usercreation/usercreation.router');
const servicetypeRouter = require('./api/ServiceType/service.router');
const serviceRegisterRouter = require('./api/ServiceRegistration/serviceRegistration.router')
const EmployeeCreationRouter = require('./api/EmployeeeCreation/employeecreation.router')
app.get('/',(req,res)=>{
    res.send("hello my name is")
})

app.use('/api/usercreation',usercreationRouter)
app.use('/api/getservicetype',servicetypeRouter)
app.use('/api/servReg',serviceRegisterRouter)
app.use('/api/employee',EmployeeCreationRouter)


app.listen(3000,()=>{
     console.log("server is running port 3000");
})

