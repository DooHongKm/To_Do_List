import React from 'react'
import TodoCard from '../components/TodoCard'

export default function TodoList({ tList, mod, rem }) {
  
  return (
    <div className='list-container'>
      {tList.map((d) =>
        <TodoCard
          key={d.id}
          id={d.id}
          title={d.title}
          time={d.time}
          mod={mod}
          rem={rem}
        />
      )}
    </div>
  )

}
