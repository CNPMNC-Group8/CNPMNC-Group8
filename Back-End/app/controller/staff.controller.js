var Staff = require('../model/staff');

exports.insert_employee = function(req,res){
    var data = req.body;
    Staff.create(data,function(response){
        res.send({result:response})
    })
} 
