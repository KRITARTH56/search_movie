import React, { useEffect, useState } from 'react';
import Addlists from "./Addlists.jsx";
const getLocalItems=()=>{
    let list=localStorage.getItem('lists');
    if(list){
        return JSON.parse(localStorage.getItem('lists'));

    }
    else{
        return[];
    }
}
const Todo=()=>{
    const[currentitems,updateditems]=useState("");
    const[items,listitems]=useState(getLocalItems());
    const Itemval=(event)=>
    {
          updateditems(event.target.value);
    };
    const addedlistitems=()=>{
        if(!currentitems)
        {

        }
        else{
        listitems((olditems)=>{
         return[...olditems,currentitems];
        });

    };
}
    const deleteitem=(id)=>{
        console.log("deleted");
        listitems((olditems)=>{
            return olditems.filter((arrElem,index)=>{
                return index !==id;
            });
        });
    };
    useEffect(() => {
        // localStorage.setItem('thapaName', 'vinod');
        localStorage.setItem('lists', JSON.stringify(items));
    }, [items]);
    return(
    <>
    <div className="App">
            <h1>Todo List</h1>
            <div className="cale">
                <input className="date" type="date"/>
                <input className="time" type="time"/>
            </div>

            
            <div className="wrap">
                
            <input type="text"  placeholder="Enter Todo list" onChange={Itemval}  required/>
            <div className="btn2">
            <button className="btn1" onClick={addedlistitems} >+</button>
            </div>
            </div>
            <ol>
                {items.map((itemval,index)=>{
                    return(<Addlists key={index}  id={index} text={itemval } onSelect={deleteitem}/>)
                })}
            </ol>
    </div>
    </>
    );
};
export default Todo;
