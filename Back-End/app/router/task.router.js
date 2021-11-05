module.exports = function(router){
    var taskController = require('../controller/task.controller')

    router.post('/api/task/insert', taskController.insert_task)
    router.put('/api/task/update', taskController.update_task)
}