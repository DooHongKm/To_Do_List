import React, { useState } from 'react'
import TodoCard from '../components/TodoCard'

export default function TodoList({ tList }) {
  
  return (
    <div className='list-container'>
      {tList.map((d) =>
        <TodoCard
          title={d.title}
          time={d.time}
        />
      )}
    </div>
  )

}
