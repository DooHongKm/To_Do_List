import React from 'react'
import { useState } from 'react'
import TodoList from '../features/TodoList'

export default function MainPage() {
  const [task, setTask] = useState('')
  return (
    <div className='page-container'>
      <TodoList />
      <input
        type='text'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button>생성 버튼</button>
    </div>
  )
}
