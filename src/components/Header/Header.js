import React from "react";
import { Link } from "react-router-dom";

export const Header=()=>{
return(
    <div>
        <h1>Hellow i am back</h1>
        <Link to="/">Home</Link>
        <Link to="/orders">Orders</Link>
    </div>
)

}