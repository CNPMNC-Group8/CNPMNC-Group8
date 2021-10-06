import Dashboard from "../container/admin/dashboard"
import Employees from "../container/admin/employees"



const routerAdmin = [
    {
        path:"/admin/dashboard",
        exact:true,
        Component:Dashboard
    },
    {
        path:"/admin/employees",
        exact:true,
        Component:Employees
    },
]

export {routerAdmin}