
import DeleteIcon from '@material-ui/icons/Delete';
import React from "react";
import { useState } from "react";
function ToDoList(props){
    const[line, setLine] =useState(false)

    const handleClick =()=>{
        setLine(true)
    }
    return(
        <>
            <div className="todo_style" >
                <li style={{textDecoration:line?"line-through":"none"}}>{props.text}
                <span onClick={handleClick} >
                <DeleteIcon style={{cursor:"pointer"}}/>
                </span>
                </li>
            </div>
        </>
    )
}

export default ToDoList;