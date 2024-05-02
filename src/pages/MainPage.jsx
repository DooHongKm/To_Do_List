import React from 'react'
import { useState } from 'react'
import TodoList from '../features/TodoList'

export default function MainPage() {

  const [task, setTask] = useState('')
  const [tList, setTList] = useState([]) 

  const addTask = () => {
    const cTime = new Date()
    setTask('')
    setTList([
      ...tList,
      {
        title: task,
        time: [cTime.getHours(), cTime.getMinutes(), cTime.getSeconds()]
      }
    ])
  }

  return (
    <div className='page-container'>
      <TodoList tList={tList} />
      <div className='page-input-container'>
        <input
          type='text'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>추가</button>
      </div>
    </div>
  )

}