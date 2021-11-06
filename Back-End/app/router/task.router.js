module.exports = function(router){
    var taskController = require('../controller/task.controller')

    router.get('/api/task/list', taskController.get_list_task)
    router.get('/api/task/detail/:task_id', taskController.details_task)
    router.post('/api/task/insert', taskController.insert_task)
    router.put('/api/task/update', taskController.update_task)
    router.delete('/api/task/delete/:task_id',taskController.delete_task)
}