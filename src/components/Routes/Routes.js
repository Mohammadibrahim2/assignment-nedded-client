import { createBrowserRouter } from "react-router-dom"

import { Home } from "../Home/Home"
import { Main } from "../Main"
import Orders from "../order/Orders"
import Update from "../update"


export const routes=createBrowserRouter([

{
    
    path:"/",
    element:<Main></Main>,
    children:[

    {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:4000/products')
       
    },
    {
        path:"/orders",
        element:<Orders></Orders>
    },
    {
        path:"product/:id",
        element:<Update></Update>,
        loader:({params})=>fetch(`http://localhost:4000/product/${params.id}`)
    }


    ]
}




])




