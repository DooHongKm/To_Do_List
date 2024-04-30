import React from 'react'
import TodoCard from '../components/TodoCard'
import {data} from '../TodoData';

export default function TodoList() {
  return (
    <div className='list-container'>
      {data.todo.map((d) =>
        <TodoCard
          key={d.id}
          title={d.title}
          time={d.time}
        />
      )}
    </div>
  )
}
