module.exports = function(router) {
    var staffController = require('../controller/costomer.controller')

    router.get('/staff/list' , staffController.get_list_staff );
    router.get('/staff/detail/:id' , staffController.detail_staff);
    router.post('/staff/add' , staffController.add_staff);
    router.delete('/staff/delete/:id', staffController.remove_staff);
    router.put('/staff/update/:id', staffController.update_staff);
}