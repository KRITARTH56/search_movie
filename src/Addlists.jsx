import React from "react";
import './index.css';
const Addlists=(props)=>{
    return( 
    <>
    <div className="in" >
    <div className="grid">
    {props.text}
    {props.date}
    </div>
    <div className="btn2">
    <button className="btn3" onClick={()=>{props.onSelect(props.id);}}>x</button>
    </div>
    </div>
    </>);

};
export default Addlists;