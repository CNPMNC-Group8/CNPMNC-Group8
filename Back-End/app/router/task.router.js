const multer = require("multer");

const storageFile = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./file"); //important this is a direct path fron our current file to storage location
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "--" + file.originalname);
    },
  });
  
const upload = multer({ storage: storageFile});


module.exports = function(router){
    var taskController = require('../controller/task.controller')

    router.get('/api/task/list', taskController.get_list_task)
    router.get('/api/task/detail/:task_id', taskController.details_task)
    router.post('/api/task/insert', upload.single('file'), taskController.insert_task)
    router.put('/api/task/update', taskController.update_task)
    router.delete('/api/task/delete/:task_id',taskController.delete_task)
}