import React, { useState } from "react"


export default function Task(props){ 
    const [strike , setstrike] = useState(false) ; 
    return(
    <div key = {props.id} className="flex"> 
        <div className="w-6 h-6 bg-slate-400 m-2 rounded-full mr-0 mt-3 border-2 border-white text-sm inline-flex justify-center items-center" onClick={()=>{setstrike(!strike)}} >✓</div>
        <div className="w-56 h-8 bg-slate-400 m-2 rounded pl-4 text-sm pt-1.5 "> 
            {strike && <del>{props.task}</del>}
            {!strike && props.task}
        </div>
        <button className="w-6 h-8 mt-2 rounded bg-slate-500 text-sm mr-3.5 inline-flex justify-center items-center" onClick={()=>{props.deltask(props.id)}}>✖</button>
    </div>)
}



 