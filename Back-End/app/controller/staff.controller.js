var Customer = require('../model/staff');


exports.get_list_staff = function(req,res){

    var data = "get_list_staff ";
    res.send({result: data});    
    
}


exports.detail_staff = function(req,res){
    var data = "detail_staff";
    res.send({result: data});    
}

//body-parser npm install --save body-parser
exports.add_staff = function(req,res){
    var data = "add_staff";
    res.send({result: data});    
}

exports.remove_staff = function(req,res){
    var data = "remove_staff";
    res.send({result: data});    
}

exports.update_staff = function(req,res){
    var data = "update_staff";
    res.send({result: data});    
}