import React, {useState} from 'react'
import TodoList from '../features/TodoList'

export default function MainPage({ tList, add, mod, rem }) {

  const [task, setTask] = useState('')

  const addTask = () => {
    setTask('')
    add(task)
  }

  return (
    <div className='page-container'>
      <TodoList
        tList={tList}
        mod={mod}
        rem={rem}
      />
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