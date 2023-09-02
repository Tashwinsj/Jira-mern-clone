import React from "react";
import { useState , useEffect } from "react"; 
import { useNavigate } from "react-router-dom"; 
import Home from "./Home";

export default function Login(){
    const navigate = useNavigate();
    const [username , setname] = useState('')
    const [password , setpass] = useState('') 
    const [message, setMessage] = useState(''); 

    function setuname(event){
        const txt = event.target.value 
        setname(txt) 
    }
    function setupass(event){
        
        const p = event.target.value 
        setpass(p) 
        console.log(password)
    }
    function loginfun(){
        fetch('http://localhost:5005/api/login', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ username , password }),
        })
            .then((response) => response.json())
            .then((data) => setMessage(data.message))
            .catch((error) => console.error('Error:', error)); 

        console.log("login fun exec")
    } 
    useEffect(()=>{
       if(message == 'Login successful') navigate('/dashboard') ;
    },[message])
    
    return(
        <>  
        <div className="flex items-center justify-center h-full "> 
            <div className="w-72 h-96 border-4 rounded borer-slate-400 -mt-40 flex flex-col   items-center overflow-hidden " >
                <div className="m-8 text-center text-slate-600 bg-slate-300  w-full  h-8 pt-1">LOGIN</div> 
                <input type="text" className="border-4 w-64 m-4 mt-12 rounded " placeholder="Username..." onChange={setuname}></input>
                <input type="password" className="border-4 w-64 m-4 rounded" placeholder="Password..." onChange={setupass}></input>
                <button className="w-24 bg-gray-700  rounded  text-white hover:bg-green-700 text-sm" onClick={loginfun}>Login</button> 
                <p className="m-8 text-sm">{message}</p>
            </div>
        </div >
        </>
    )
}