const db = require('../common/connect');
const moment =  require('moment');

const Task = function(task){
    this.task_id = task.task_id;
    this.job = task.job;
    this.status = task.status;
    this.category = task.category;
    this.title = task.title;
    this.progress = task.progress;
    this.assignee = task.assignee;
    this.register_user = task.register_user;
    this.start_date = task.start_date;
    this.end_date = task.end_date;
    this.effort = task.effort;
    this.important = task.important;
    this.description = task.description;
    this.file = task.file;
    this.confirmation = task.confirmation;
    this.implementation =  task.implementation;
    this.test = task.test;
    this.approval = task.approval;
    this.finish = task.finish;
    this.step = task.step;
}

Task.list = function(result) {
    const query = `
    WITH REGISTER_T AS(
        SELECT B.FULL_NAME AS REGISTER_USER_NAME, A.TASK_ID
        FROM TASK A, STAFF B
        WHERE A.REGISTER_USER = B.EMPLOYEE_ID
    ),
    ASSIGNEE_T AS
    (
        SELECT B.FULL_NAME AS ASSIGNEE_NAME, A.TASK_ID
        FROM TASK A, STAFF B
        WHERE A.ASSIGNEE = B.EMPLOYEE_ID
    )
    
    SELECT A.TASK_ID, A.JOB,A.STATUS,A.CATEGORY,A.TITLE,A.PROGRESS,A.ASSIGNEE,A.REGISTER_USER,A.START_DATE,A.END_DATE, A.EFFORT, B.REGISTER_USER_NAME, C.ASSIGNEE_NAME
    FROM TASK A, REGISTER_T B, ASSIGNEE_T C
    WHERE A.TASK_ID = B.TASK_ID
    AND A.TASK_ID = C.TASK_ID
    `;
    db.query(query, function(err, task){
        if(err){
            result("Lấy danh sách Task không thành công :(");
        }
        else{
            task.map(item =>{
                item.START_DATE = moment(item.START_DATE).format("DD/MM/YYYY")
                item.END_DATE = moment(item.END_DATE).format("DD/MM/YYYY")
            })
            result(task)
        }
    });
}

Task.detail = function(task_id, result) {
    const query = `
    WITH REGISTER_T AS(
        SELECT  A.REGISTER_USER ,B.IMAGE AS IMAGE_REGISTER , B.FULL_NAME AS FULL_NAME_REGISTER FROM TASK A, staff B
        WHERE A.REGISTER_USER = B.EMPLOYEE_ID
        AND A.TASK_ID = ?
    ),
    ASSIGNEE_T AS(
        SELECT  A.ASSIGNEE ,B.IMAGE AS IMAGE_ASSIGNEE , B.FULL_NAME AS FULL_NAME_ASSIGNEE FROM TASK A, staff B
        WHERE A.ASSIGNEE = B.EMPLOYEE_ID
        AND A.TASK_ID = ?
    ),
    CONFIRMATION_T AS(
        SELECT  A.CONFIRMATION ,B.IMAGE AS IMAGE_CONFIRMATION , B.FULL_NAME AS FULL_NAME_CONFIRMATION FROM TASK A, staff B
        WHERE A.CONFIRMATION = B.EMPLOYEE_ID
        AND A.TASK_ID = ?
    ),
    IMPLEMENTATION_T AS(
        SELECT  A.IMPLEMENTATION ,B.IMAGE AS IMAGE_CONFIRMATION , B.FULL_NAME AS FULL_NAME_IMPLEMENTATION FROM TASK A, staff B
        WHERE A.IMPLEMENTATION = B.EMPLOYEE_ID
        AND A.TASK_ID = ?
    ),
    TEST_T AS(
        SELECT  A.TEST ,B.IMAGE AS IMAGE_TEST , B.FULL_NAME AS FULL_NAME_TEST FROM TASK A, staff B
        WHERE A.TEST = B.EMPLOYEE_ID
        AND A.TASK_ID = ?
    ),
    APPROVAL_T AS(
        SELECT  A.APPROVAL ,B.IMAGE AS IMAGE_APPROVAL , B.FULL_NAME AS FULL_NAME_APPROVAL FROM TASK A, staff B
        WHERE A.APPROVAL = B.EMPLOYEE_ID
        AND A.TASK_ID = ?
    ),
    FINISH_T AS(
        SELECT  A.FINISH ,B.IMAGE AS IMAGE_FINISH , B.FULL_NAME AS FULL_NAME_FINISH FROM TASK A, staff B
        WHERE A.FINISH = B.EMPLOYEE_ID
        AND A.TASK_ID = ?
    ),
    TASK_T AS(
        SELECT *
        FROM TASK
        WHERE TASK_ID = ?
    )
    
    SELECT A.*, B.*,C.*,D.*,E.*,F.*,G.*, H.* 
    FROM REGISTER_T A,ASSIGNEE_T B, CONFIRMATION_T C , IMPLEMENTATION_T D, TEST_T E, APPROVAL_T F, FINISH_T G, TASK_T H
    `;
    db.query(query,[task_id,task_id,task_id,task_id,task_id,task_id,task_id,task_id],function(err, task){
        if(err || task.length == 0){
            result("Không có task cần tìm");
        }
        else{
            // console.log("staff",staff)
            task.map(item =>{
                item.START_DATE = moment(item.START_DATE).format("DD/MM/YYYY")
                item.END_DATE = moment(item.END_DATE).format("DD/MM/YYYY")
                item.FILE = `http://localhost:9999/get-file/${item.FILE}`
            })
            // result(task)
            result(task[0]);
        }
    })
}


Task.create = function(data,file,result){
    const query = "INSERT INTO TASK (JOB,STATUS,CATEGORY,TITLE,PROGRESS,ASSIGNEE,REGISTER_USER,START_DATE,END_DATE,EFFORT,IMPORTANT,DESCRIPTION,FILE,CONFIRMATION,IMPLEMENTATION,TEST,APPROVAL,FINISH,STEP) VALUES(?,?,?,?,?,?,?,DATE_FORMAT(SYSDATE(), '%Y-%m-%d'),?,?,?,?,?,?,?,?,?,?,?)"
    if(file && file !== undefined){
        db.query(query,[data.job,data.status,data.category,data.title,data.progress,data.assignee,data.register_user,data.end_date,data.effort,data.important,data.description,file.filename,data.confirmation,data.implementation,data.test,data.approval,data.finish,data.step],function(err){
            if(err){
                result("Thêm task thất bại :( ")
            }
            else{
                result("Thêm task thành công :)")
            }
        })
    }
    else{
        db.query(query,[data.job,data.status,data.category,data.title,data.progress,data.assignee,data.register_user,data.end_date,data.effort,data.important,data.description,data.file,data.confirmation,data.implementation,data.test,data.approval,data.finish,data.step],function(err){
            if(err){
                result("Thêm task thất bại :( ")
            }
            else{
                result("Thêm task thành công :)")
            }
        })
    }
}

Task.update = function(data,result){
    const query = "UPDATE TASK SET JOB= ? , STATUS = ? , CATEGORY = ? , TITLE = ? , PROGRESS= ? , ASSIGNEE = ? , REGISTER_USER = ? , START_DATE = ? , END_DATE= ?, EFFORT = ?  WHERE TASK_ID = ? ";
    db.query(query,[data.job,data.status,data.category,data.title,data.progress,data.assignee,data.register_user,data.start_date,data.end_date,data.effort,data.task_id],function(err){
        if(err){
            result("Cập nhật không thành công :(");
        }
        else{
            result("Cập nhật thành công :)");
        }
    });
}

Task.delete = function(task_id,result){
    const query = "DELETE FROM TASK WHERE TASK_ID = ?"
    db.query(query,task_id,function(err){
        if(err){
            result("Xóa task không thành công :)");
        }
        else{
            result("Xóa task thành công :)");
        }
    })
}





module.exports =  Task