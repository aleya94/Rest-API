const express = require('express');
const router = require("./src/routes/api");
const app = new express();

//security middleware Import
const rateLimit= require('express-rate-limit')
const helmet= require('helmet')
const mongoSanitize= require('express-mongo-sanitize')
const xss= require('xss-clean')
const hpp= require('hpp')
const cors= require('cors')
const mongoose=require('mongoose')

//security middleware Implement

app.use (helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())
app.use(cors())

//Request Rate Limiting

const limiter = rateLimit({
    windowMs:15*60*1000, //15 minutes
    max:100 //limit each IP to 100 requests per windowMs
});
app.use(limiter)



//MongoDB database Connection

let URI="mongodb://127.0.0.1:27017/school";
let OPTION={user:'', password:'',};
mongoose.connect(URI,OPTION,(error)=>{
    console.log("Connection Success");
    console.log(error);
})



app.use("/api/v1",router)




//Undefined routes 
app.use('*',(req,res)=>{
    res.staus(404).json({status:"fail", data:"Not found"})
})


module.exports=app;





