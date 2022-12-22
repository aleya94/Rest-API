const StudentsModel=require('../models/StudentsModel')


//CRUDnode


//Create/insert data
exports.insertStudent = (req,res)=>{
   let reqBody= req.body;

StudentsModel.create(reqBody,(err,data)=>{
    if(err){
        res.status(400).json({status:"fail", data:err});
    }
    else{
        res.status(201).json({status:"success", data:data});

    }
})
}



//Read Data
exports.ReadStudent=(req,res)=>{
    let Query={};
    let Projection="Name Roll Class Remarks"
    StudentsModel.find(Query, Projection,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err});
        }
        else{
            res.status(201).json({status:"success", data:data});
    
        }
    })    
}



