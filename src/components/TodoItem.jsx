import React from 'react'

const TodoItem = ({ item, removefn, checkfn }) => {
    return (
        <>
            {item.map((e) => (
                e.status ? (
                    null
                ) : (<div className='task-div' key={e.id}>
                    <div className='task-tag' id={e.status ? "check" : "no-check"}>{e.task}</div>
                    <i className="fa-solid fa-check" onClick={() => { checkfn(e.id) }}></i>
                    <i className="fa-solid fa-eraser" onClick={() => { removefn(e.id) }}></i>
                </div>)
            ))}
        </>
    )
}

export default TodoItem