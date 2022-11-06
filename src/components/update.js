import React, { useState } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";

const Update=()=>{
    const updata=useLoaderData()
    const [apadata,setDta]=useState(updata)
    
   
   

const handleSubmitt=event=>{
    event.preventDefault()
    console.log(apadata)
}

    const handleonchange=event=>{

    
        
         
            const field=event.target.name;
            const value=event.target.value;
            const newdatas={...apadata}
            newdatas[field]=value
          
           
            setDta(newdatas)


    }
    return(
        <div>
            <h1>update product 
               <span style={{color:"orangered"}}> {
            
                apadata.name==="mango"? apadata.name: "unnamed"
        
            }</span>
            </h1>

            <form onSubmit={handleSubmitt} >
                <h2>
                   
                </h2><br/>
                <input onChange={handleonchange}  name="name"type="text"defaultValue={updata.name} style={{padding:"10px 0"}}/><br/>
                <input  onChange={handleonchange}name="text" type ="text" defaultValue={updata.price} style={{padding:"10px 0"}}/><br/>
               <button  type="submit">submit</button>
               
               </form>

        </div>
    )


}
export default Update