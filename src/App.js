import React, { useState } from 'react';
import './App.css';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';

import ToDoList from './ToDoList';
// import { DeleteIcon } from '@material-ui/icons';
function App() {

  const[item,setItem] = useState()
  const[newItem,setNewItem] =useState([])
  

  const handleChange=(event)=>{
    setItem(event.target.value)
  }

    const handleClick=(event)=>{
      setNewItem([...newItem,item])
    }

   
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <h1>ToDo List</h1>
          <br/>

          <input 
            type='text'
            onChange={handleChange}
            placeholder="Add an Item"
          />
          <span>

          <Button onClick={handleClick}><AddIcon/></Button>
          </span>

          <ol>
          {
            newItem.map((val,index)=>{
   
              return <ToDoList text={val} key={index} ></ToDoList>
            })
          }
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
