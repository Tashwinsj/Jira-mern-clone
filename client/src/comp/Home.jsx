import React, { useState } from "react";
import Card from "./Card";
export default function Home(){
    const [colcardos ,setcolcardos] =useState([]); 
    const [colcards , setcards] = useState()  
    const cardlist  = colcardos && colcardos.map(item => {return(<Card key={item.id}  id={item.id} name={item.tname} deletefun ={deletecol}/>)})
    function addcol(){ 
        const newobject =  {
            tname : "Title here..."  ,
            id  : colcardos.length +1 
        }
        setcolcardos([...colcardos ,newobject]) 

    }
    function deletecol(id){ 
        const newarr =  colcardos.filter((tes) =>{return(
            tes.id !== id
        )}) 
        setcolcardos(newarr) ; 
    }
    return(
        <div className="h-full">  
            <div className="header flex text-xl shadow-lg h-16 ">  
                <div className="text-slate-700 text-sm m-5 ml-20" >Your work</div>
                <div className="text-slate-700 text-sm m-5">Projects</div>
                <div className="text-slate-700 text-sm m-5">Dashboards</div>
                <div className="text-slate-700 text-sm m-5">Teams</div>
                <div className="text-slate-700 text-sm m-5">Apps</div> 
                <div className="bg-blue-600 h-8 w-20 m-4 p-2 pl-4 pt-1.5 text-sm text-white rounded">Create</div> 
                <input type="text" className="h-8 w-40 m-4 border-2 ml-96 rounded right-0" ></input> 
                <div className="bg-blue-600 h-8 w-8 rounded-full text-white text-sm pl-2 pt-1.5 m-4">TJ</div>
            </div> 
            <div className="flex">
                <div className="sidebar  w-56 min-h-screen   border-2 bg-white  " > 
                    <div className="text-sm m-8 w-34 bg-slate-100 p-5 py-2 ml-2 rounded-md hover:bg-slate-300">Timeline</div>
                    <div className="text-sm m-8 w-34 bg-slate-100 p-5 py-2 ml-2 -mt-4 rounded-md hover:bg-slate-300">Board</div>
                </div> 
                <div className="main_window text-xl text-slate-700 overflow-x-auto">  
                    <div className="path m-8 text-sm text-slate-400">Projects / My Kanban Project</div>
                    <div className="title m-8 text-xl font-semibold text-slate-700">KAN board</div> 
                    <div className="flex">
                        <input type="text" className="h-8 w-40 border-2  m-8 -mt-2 rounded right-0" ></input> 
                        <div className="bg-blue-600 h-8 w-8 rounded-full text-white text-sm pl-2 pt-1.5 -m-2 ">SU</div>
                        <div className="bg-emerald-600 h-8 w-8 rounded-full text-white text-sm pl-1.5 pt-1 -m-2 border-2">TJ</div>
                        <div className="bg-slate-200 h-8 w-8 rounded-full text-black text-sm pl-3 pt-1.5 -m-2 ml-4 ">+</div>
                    </div> 
                    <div className="flex">
                        <Card name={"TO DO 1"} deletefun ={deletecol}/> 
                        <div className="flex">{cardlist}</div>
                        <button className="h-6 w-6 bg-slate-400 mt-8 rounded inline-flex justify-center items-center" onClick={addcol} >+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}