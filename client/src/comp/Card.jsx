import React from "react";
import { useState } from "react"; 
import Task from "./Task";


export default function Card(props){  
    //below state maintains the card title
    const [titled, settitled] = useState(props.name) ;   
    //below state maintains all the tasks inside of the card
    const [taskdata , settask] = useState([]) ;  
    //below state maintains the input of the task that needs to be created 
    const [txt , stxt ] = useState("") ;  
    //below state toggles tasks display
    const [disp , setdisp ] = useState(false) ; 
    //below state toggles the input window for taking the task input 
    const [tbox , stbox] = useState(false) ; 
    //below state toggles the title input widow
    const [tidisp , settidisp] =useState(false) ; 
    //below state toggles the dropdown box state
    const [dd  ,sdd] = useState(false)
   
    function titlemaker(event){
        settitled(event.target.value)
    }
    function createtask(){
        stbox(!tbox)
    }
    function textlistner(event){
        stxt(event.target.value)
    } 
    function add(){ 
        setdisp(true)
        if(txt !== ""){
            const taskname ={
                task : txt  ,
                id : taskdata.length +1 
            } 
            taskdata.push(taskname)
         }
        stbox(!tbox)
    } 
    function del(){
        stbox(!tbox)
    } 
    function titlefun(){
        settidisp(!tidisp)
    } 
    function opdd(){
        sdd(!dd)
    }
    function deletecard(n){
        props.deletefun(n)
    }
    function delclicker(id){
        const newarr =  taskdata.filter((tes) =>{return(
            tes.id !== id
        )}) 
        settask(newarr) ; 
    }
    
    const rend = taskdata.map(tes =>{ return(<Task key={tes.id} id={tes.id} task={tes.task} deltask ={delclicker}/>)})


    return(
        <div className="group m-8 h-auto pb-4 w-72 bg-gray-200 rounded z-0 ">
            <div className="flex">
                <div className="card-title z-0 w-56 h-8 m-2 rounded inline-flex items-center pl-4 text-sm font-bold text-slate-500  hover:bg-gray-300" onClick={titlefun} >{titled}</div> 
                <div className="  z-60 bg-slate-400 h-8 w-8 mt-2 rounded m-1 inline-flex items-center justify-center pb-4 " onClick={()=>{props.deletefun(props.id)}}>... </div>
                
            </div> 
            {tidisp && <div className="w-68 h-8 bg-white m-2 rounded">
                <form className="flex">
                    <input type="text" className="title-input border-2 m-1 h-6 w-56 text-sm" placeholder="Title?" onChange={titlemaker}></input> 
                    <button className="title-submit bg-slate-500 rounded w-6 mt-1.5 ml-2 h-5 text-sm inline-flex justify-center items-center" onClick={titlefun}>✓</button>
                </form>
                </div>}
            {disp && <div> {rend}</div>}
            {tbox &&  <div className="w-68 h-16 bg-white m-2 rounded">
                <form onSubmit={add}>
                <input type="text"  placeholder="What needs to be done?" className="issue-input border m-2 w-64 h-8 text-sm pl-2 " onChange={textlistner}></input>  
                </form>
                <div className="flex">
                    <div className="issue-add h-4 w-8 bg-gray-400 m-2 -mt-1  rounded ml-48 text-xs pl-2 " onClick={add}>✓</div>
                    <div className="issue-delete h-4 w-8 bg-gray-400 m-2 -mt-1  rounded  text-xs pl-2 " onClick={del}>✕</div>
                </div>
            </div> }
            <div className="create-issue-button h-8 w-68 m-2 bg-gray-300 rounded opacity-100 z-0" onClick={createtask}></div>
            <div className="text-sm w-24 m-2 -mt-9 ml-4 opacity-100 hover:cursor-pointer z-0 " onClick={createtask}>+ Create issue</div>
        </div>
    )
}
 