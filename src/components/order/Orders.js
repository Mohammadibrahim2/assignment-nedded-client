import React, { useState } from "react";
import { useEffect } from "react";
import "./Order.css"

const Orders=()=>{

const [orders,setOrders]=useState([])
    const count =12;
    const [page,setPage]=useState(0)
    const [size,setSize]=useState(2)
    const totalpage=Math.ceil(count/size);


    useEffect(()=>{

        fetch(`http://localhost:4000/orders?page=${page}&size=${size}`)

        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[page,size])

return(
    <div>
        <h1>
            The orders is{orders.length}

        </h1>
        <div style={{border:"2px solid orange"}}>
        {
            orders.map(ord=><li>{ord.name}</li>)
        }
        </div>
        <p>currently selected pages:{page} & size :{size}</p>
        <div className="pagination">
        {
            [...Array(totalpage).keys()].map(pagenum=><button
            key={pagenum}
            className={page===pagenum && "selected"}
            onClick={()=>setPage(pagenum)}>
                {pagenum}


            </button>)
        }
        <select onChange={event=>setSize(event.target.value)}>
            <option value="2">2</option>
            <option value="3" selected>3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select>
        </div>
       
    </div>
)


}
export default Orders