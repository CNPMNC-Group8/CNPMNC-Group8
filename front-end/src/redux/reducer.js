import { combineReducers } from "redux";
import userSignUpEmployeesReducer from '../container/admin/employees/module-sign-up/reducer'
import listEmployeesReducer from '../container/admin/employees/module-list-employees/reducer'
import userUpdateReducer from '../container/admin/employees/module-update-employee/reducer'
import deleteEmployeeReducer from '../container/admin/employees/module-delete-employee/reducer'
import deleteEmployeeFlgReducer from '../container/admin/employees/module-delete-employee-flg/reducer'

const rootReducer = combineReducers({
    userSignUpEmployeesReducer,
    listEmployeesReducer,
    userUpdateReducer,
    deleteEmployeeReducer,
    deleteEmployeeFlgReducer
});
export default rootReducer