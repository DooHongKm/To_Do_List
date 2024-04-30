import React from 'react'

export default function TodoCard() {
  return (
    <div className='card-container'>
      <h4>TodoCard</h4>
      <p>Time</p>
      <div className='card-btn-container'>
        <button>수정</button>
        <button>삭제</button>
      </div>
    </div>
  )
}
