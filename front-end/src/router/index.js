import Dashboard from "../container/admin/dashboard"
import Employees from "../container/admin/employees"
import Task from "../container/admin/task"



const routerAdmin = [
    {
        path:"/admin/dashboard",
        exact:true,
        Component:Dashboard
    },
    {
        path:"/admin/employees",
        exact:false,
        Component:Employees
    },
    {
        path:"/admin/tasks",
        exact:false,
        Component:Task
    }
]

export {routerAdmin}