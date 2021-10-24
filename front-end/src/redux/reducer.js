import { combineReducers } from "redux";
import userSignUpEmployeesReducer from '../container/admin/employees/module-sign-up/reducer'
import listEmployeesReducer from '../container/admin/employees/module-list-employees/reducer'

const rootReducer = combineReducers({
    userSignUpEmployeesReducer,
    listEmployeesReducer,
});
export default rootReducer