import Dashboard from "../container/admin/dashboard"



const routerAdmin = [
    {
        path:"/admin/dashboard",
        exact:true,
        name: "Dashbaord",
        component:Dashboard
    },
]

export {routerAdmin}