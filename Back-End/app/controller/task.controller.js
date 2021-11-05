const Task  = require('../model/task')

exports.insert_task = function(req,res){
    let data = req.body
    console.log("task", req.body)
    Task.create(data, function(response){
        res.send({result:response})
    })
}

exports.update_task = function(req,res){
    let data = req.body;
    console.log("task update",data);
    Task.update(data,function(response){
        res.send({result:response});
    })
}
