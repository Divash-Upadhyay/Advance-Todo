import React from 'react'

const TodoComplete = ({ item }) => {
    return (
        <>
            <div>
                <div className="showCom-div">👍 Complete Task</div>
                <div className='com-div' >
                    <div className='com-tag'>Welcome</div>
                </div>
                {item.map((tsk) => (
                    tsk.status ? (
                        <div className='com-div' key={tsk.id} >
                            <div className='com-tag'>{tsk.task}</div>
                        </div>
                    ) : (
                        null
                    )
                ))}
            </div>
        </>
    )
}

export default TodoComplete