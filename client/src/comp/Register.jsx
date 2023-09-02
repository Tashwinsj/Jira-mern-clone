import React, { useState } from "react";
import {Link} from 'react-router-dom' 



export default function Register(){ 
    const [nam , setnam] = useState('')
    const [mail , setmail] = useState('')
    const [pass , setpass] = useState('') 
    const [rendermessage  ,setmsg]= useState('')

     
    function namlis(event){
        setnam(event.target.value)
    }
    function maillis(event){
        setmail(event.target.value)
    }
    function passlis(event){
        setpass(event.target.value)
    }
    function   submitreg(){ 
        const usedata = {
            name : nam , 
            email : mail , 
            password : pass 
        }
        fetch('http://localhost:6001/auth/register',{
            method :"POST" ,
            headers: { "Content-Type": "application/json" }, 
            body: JSON.stringify(usedata)  ,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        }).then((response)=> response.json())
          .then((data) => {
             setmsg(data.name)
         })
         .catch((err) => {
            console.log(err.message);
         }); 

         
    }
    return(
        <div className="h-screen flex items-center justify-center">
         <div className="text-sm bg-gray-300 w-80 rounded  flex-row   justify-center p-12 h-96">
            <div className="bg-slate-500 h-6 text-white text-lg p-12 pt-4 rounded-lg  ">Register</div> 
            <input className="m-16 ml-0 l-16 rounded text-lg mb-4" type="text" placeholder="name..." onChange={namlis}></input>
            <input className="m-16 mt-0 ml-0 l-16 rounded text-lg mb-4" type="email" placeholder="email..." onChange={maillis}></input>
            <input className="m-16 ml-0 mt-0  mb-0 l-16 rounded text-lg" type="password" placeholder="password" onChange={passlis}></input> 
            <Link to="/login" > <button onClick={submitreg} className="bg-black w-16 h-8 mt-4 text-white rounded-lg">Submit</button> </Link>
             <p>{rendermessage}</p>
         </div>
        </div>
    )
}