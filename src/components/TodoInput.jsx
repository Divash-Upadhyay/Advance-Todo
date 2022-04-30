import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import TodoComplete from './TodoComplete';
import TodoItem from './TodoItem';

const TodoInput = () => {
  const [input, setInput] = useState();
  const [item, setItem] = useState([]);

  const showItem = () =>{
    if(!input){
      alert("Please Add Item")
    }else{
      const obj = {
        task: input,
        status: false,
        id: nanoid(5)
      }
      setItem([...item,obj]);
      setInput("")
    }
  }

  const checkItem = (index) => {
    setItem(item.map((e) => e.id === index ? {...e, status: !e.status} : e))
    // setTimeout(()=> {
    //   const checkList = item.filter((creEl) => {
    //     return creEl.id !== index;
    //   })
    //   setItem(checkList)
    // },2000)
  }

  const removeItem = (id) => {
    const updateList = item.filter((creEl)=> {
      return creEl.id !== id;
    })
    setItem(updateList);
  }

  return (
    <div>
      <div className="input-div">
        <input type="text" className='input-tag' placeholder='✍ Add Task' value={input} onChange={(e) => {
          setInput(e.target.value)
        }} />
        <i className="fa-solid fa-plus" onClick={() => {showItem()}}></i>
      </div>
        <TodoItem item={item} checkfn={checkItem} removefn={removeItem}/>
        <TodoComplete item={item}/>
    </div>
  )
}

export default TodoInput