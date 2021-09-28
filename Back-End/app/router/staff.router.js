module.exports = function(router) {
    var staffController = require('../controller/staff.controller')

    router.post('/api/staff/insert' , staffController.insert_employee);

}