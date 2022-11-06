import { useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

export const Home=()=>{
// const [users,setUser]=useState([])

const Allporducts=useLoaderData()
const [displaypro,setDis]=useState(Allporducts)
// console.log(Allporducts)




// const handlesubmit=(event)=>{
//     event.preventDefault()

// const name=event.target.name.value;
// const email=event.target.email.value;
// event.target.reset()

// setUser({name,email})
// const friends={name,email}




    // fetch("http://localhost:4000/friends",{
    //     method:"POST",
    //     headers:{
    //         "content-type":"application/json"
    //     },
    //     body:JSON.stringify(friends)
    // })
    // .then(res=>res.json())
    // .then(data=>{
    //     const newusers=[...friends,data]
    //     setUser(newusers)
    // })
        
    const handleDelete=(id)=>{
        const agree= window.confirm("do you want to delete?")
        if(agree){
           


            fetch(`http://localhost:4000/delete/${id}`,{

                method:"DELETE"})
        
                // headers:{
                //     "Content-Type":"application/jsnon"
                // },
                // body:JSON.stringify()
                // })
                // .then(res=>res.json())
                .then(data=>{
                    if(data){
                        const remaining=displaypro.filter(di=>di.id!==id)
                        
                        setDis(remaining)


                    }


                    console.log(data)
                })

        }
        

       
    }




    return(
        <div>
            <h2>hello home</h2>
            {/* <form onSubmit={handlesubmit}>
                <h2>
                   Products{porducts.length} 
                </h2><br/>
                <input  name="name"type="text" style={{padding:"10px 0"}}placeholder="enter your name"/><br/>
                <input name="email" type ="email" style={{padding:"10px 0"}}placeholder="enter your email"/><br/>
               <button type="submit">submit</button>



            </form> */}
            <h3>
            Products{displaypro.length} 
            </h3>
            {displaypro.map(product=><li>{product.name} and price:{product.price}
            <Link to={`/product/${product.id}`}>update</Link>
            <button onClick={()=>handleDelete(product.id)}>Delete</button></li>)}
            
        </div>
    )
}