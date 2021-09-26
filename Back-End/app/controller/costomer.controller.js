var Customer = require('../model/customer');


exports.get_list_customer = function(req,res){

    var data = "get_list_customer";
    res.send({result: data});    
    
}


exports.detail_customer = function(req,res){
    var data = "detail_customer";
    res.send({result: data});    
}

//body-parser npm install --save body-parser
exports.add_customer = function(req,res){
    var data = "add_customer";
    res.send({result: data});    
}

exports.remove_customer = function(req,res){
    var data = "get_list_customer";
    res.send({result: data});    
}

exports.update_customer = function(req,res){
    var data = "get_list_customer";
    res.send({result: data});    
}