const db = require('../common/connect')

const Staff = function(staff) {
    this.id = staff.id;
    this.name = staff.name;
    this.email = staff.email;
}