module.exports = function(router) {
    var customerController = require('../controller/costomer.controller')

    router.get('/customer/list' , customerController.get_list_customer );
    router.get('/customer/detail/:id' , customerController.detail_customer);
    router.post('/customer/add' , customerController.add_customer);
    router.delete('/customer/delete/:id', customerController.remove_customer);
    router.put('/customer/update/:id', customerController.update_customer);
}