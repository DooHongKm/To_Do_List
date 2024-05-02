import React from 'react'

export default function TodoCard({ id, title, time, mod, rem }) {

  const h = time[0] < 10 ? '0' + time[0] : time[0]
  const m = time[1] < 10 ? '0' + time[1] : time[1]
  const s = time[2] < 10 ? '0' + time[2] : time[2]

  const modTask = () => {
    mod(id, "new Text")
  }

  const remTask = () => {
    rem(id)
  }

  return (
    <div className='card-container'>
      <h4>{title}</h4>
      <p>{h + ' : ' + m + ' : ' + s}</p>
      <div className='card-btn-container'>
        <button onClick={modTask}>수정</button>
        <button onClick={remTask}>삭제</button>
      </div>
    </div>
  )

}