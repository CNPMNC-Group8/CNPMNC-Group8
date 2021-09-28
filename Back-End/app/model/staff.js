const db = require('../common/connect')

const Staff = function(staff) {
    this.employee_id = staff.employee_id;
    this.full_name = staff.full_name;
    this.user_name = staff.user_name;
    this.password = staff.password;
    this.birthday = staff.birthday;
    this.email = staff.email;
    this.image = staff.image;
    this.position = staff.position
    this.roll = staff.roll;
}

Staff.create = function(data,result){
    db.query("INSERT INTO STAFF SET?", data,function(err){
        if(err){
            result("Đăng ký thất bại :(");
        }
        else{
            result("Đăng ký thành công :))");
        }
    })
}


module.exports = Staff;