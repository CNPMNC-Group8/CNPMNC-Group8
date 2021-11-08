import { combineReducers } from "redux";
import userSignUpEmployeesReducer from '../container/admin/employees/module-sign-up/reducer'
import listEmployeesReducer from '../container/admin/employees/module-list-employees/reducer'
import userUpdateReducer from '../container/admin/employees/module-update-employee/reducer'
import deleteEmployeeReducer from '../container/admin/employees/module-delete-employee/reducer'
import deleteEmployeeFlgReducer from '../container/admin/employees/module-delete-employee-flg/reducer'

import insertTaskReducer from '../container/admin/task/module-insert-task/reducer'
import listEmployeesSelectReducer from '../container/admin/task/module-list-employees-select/reducer'
import listTaskReducer from '../container/admin/task/module-list-tasks/reducer'

const rootReducer = combineReducers({
    userSignUpEmployeesReducer,
    listEmployeesReducer,
    userUpdateReducer,
    deleteEmployeeReducer,
    deleteEmployeeFlgReducer,
    
    insertTaskReducer,
    listEmployeesSelectReducer,
    listTaskReducer
});
export default rootReducer