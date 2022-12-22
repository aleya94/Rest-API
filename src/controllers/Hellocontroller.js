exports.HelloGet=(req,res)=>{

    res.status(200).json({status:"success", data:"This is  my first express rest api"});
}

//how to change status code with get post request
// exports.HelloGet=(req,res)=>{
//     res.status(200).json({status: "success", data:"Hello Get"});
// }

exports.HelloPost=(req,res)=>{
    res.status(201).json({status: "success", data:"Hello Post"});
}

