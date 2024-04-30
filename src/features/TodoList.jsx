import React from 'react'
import TodoCard from '../components/TodoCard'

export default function TodoList() {
  return (
    <div className='list-container'>
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
    </div>
  )
}
