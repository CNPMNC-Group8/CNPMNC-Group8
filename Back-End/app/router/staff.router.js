module.exports = function(router) {
    var staffController = require('../controller/staff.controller')

    router.get('/api/staff/list',staffController.get_list_employee);
    router.get('/api/staff/detail/:employee_id', staffController.details_employee);
    router.post('/api/staff/insert' , staffController.insert_employee);
    router.put('/api/staff/update', staffController.update_employee);
    router.delete('/api/staff/delete/:employee_id',staffController.delete_employee);
    router.put('/api/staff/delete-flag',staffController.delete_employee_flg);
    router.post('/api/staff/login', staffController.login_employee);

}