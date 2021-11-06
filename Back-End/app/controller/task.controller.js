const Task  = require('../model/task')


exports.get_list_task = function(req,res){
    Task.list(function(response){
        res.send({result:response})
    })
}

exports.details_task = function(req,res){
    let task_id = req.params.task_id;
    Task.detail(task_id,function(response){
        res.send({result:response})
    })
}


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

exports.delete_task = function(req,res){
    let task_id = req.params.task_id;
    Task.delete(task_id,function(response){
        res.send({result:response});
    });
}
