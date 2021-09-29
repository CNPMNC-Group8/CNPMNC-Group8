const db = require('../common/connect');
var jwt = require('jsonwebtoken');

const Staff = function(staff) {
    this.employee_id = staff.employee_id;
    this.full_name = staff.full_name;
    this.user_name = staff.user_name;
    this.password = staff.password;
    this.birth_day = staff.birth_day;
    this.email = staff.email;
    this.image = staff.image;
    this.position = staff.position
    this.roll = staff.roll;
    this.delete_flag = staff.delete_flag;
}

Staff.list = function(result) {
    const query = "SELECT * FROM STAFF";
    db.query(query, function(err, staff){
        if(err){
            result("Lấy danh sách Staff không thành công :(");
        }
        else{
            result(staff)
        }
    });
}

Staff.detail = function(employee_id,result) {
    const query = "SELECT * FROM STAFF WHERE EMPLOYEE_ID = ?";
    db.query(query,employee_id,function(err, staff){
        if(err || staff.length == 0){
            result("Không có nhân viên cần tìm");
        }
        else{
            result(staff[0]);
        }
    })
}

Staff.create = function(data,result){
    db.query("INSERT INTO STAFF SET?", data,function(err){
        if(err){
            result("Đăng ký thất bại :(");
        }
        else{
            result("Đăng ký thành công :)");
        }
    })
}

Staff.update = function(data,result){
    const query = "UPDATE STAFF SET FULL_NAME= ? , USER_NAME = ? , PASSWORD = ? , BIRTH_DAY = ? , EMAIL= ? , IMAGE = ? , POSITION = ? , ROLL= ?, DELETE_FLAG = ?  WHERE EMPLOYEE_ID = ? ";
    db.query(query,[data.full_name, data.user_name, data.password, data.birth_day, data.email, data.image, data.position, data.roll, data.delete_flag,data.employee_id],function(err){
        if(err){
            result("Cập nhật không thành công :(");
        }
        else{
            result("Cập nhật thành công :)");
        }
    });
}

Staff.delete = function(employee_id,result){
    const query = "DELETE FROM STAFF WHERE EMPLOYEE_ID = ?"
    db.query(query,employee_id,function(err){
        if(err){
            result("xóa nhân viên không thành công :)");
        }
        else{
            result("xóa nhân viên thành công :)");
        }
    })
}

Staff.delete_flg = function(data,result){
    const query = "UPDATE STAFF SET DELETE_FLAG = ? WHERE EMPLOYEE_ID = ? ";
    db.query(query,[data.delete_flag, data.employee_id],function(err){
        if(err){
            result("Chuyển cờ không thành công :(");
        }
        else{
            result("Chuyển cờ thành công  :)");
        }
    });
}

Staff.login = function(data,result){
    const query = "SELECT USER_NAME,ROLL FROM STAFF WHERE USER_NAME = ? AND PASSWORD = ?";
    db.query(query,[data.user_name, data.password], function(err,staff){
        if(staff.length > 0){
            let token = jwt.sign({staff},'hoangnt18@uef.edu.vn',{algorithm:'HS256',expiresIn:'3h'})
            console.log("staff",staff);
            result({access_token:token});
        }
        else{
            result("Đăng nhập thất bại");
        }
    });
    
}


module.exports = Staff;