import React from 'react'

export default function TodoCard({ title, time }) {
  const h = time[0] < 10 ? '0' + time[0] : time[0]
  const m = time[1] < 10 ? '0' + time[1] : time[1]
  const s = time[2] < 10 ? '0' + time[2] : time[2]
  return (
    <div className='card-container'>
      <h4>{title}</h4>
      <p>{h + ':' + m + ':' + s}</p>
      <div className='card-btn-container'>
        <button>수정</button>
        <button>삭제</button>
      </div>
    </div>
  )
}
