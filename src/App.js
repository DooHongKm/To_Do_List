import React, {useState} from 'react'
import MainPage from './pages/MainPage'

export default function App() {

  const [nextId, setNextId] = useState(1)
  const [taskList, setTaskList] = useState([])

  const addCallBack = (newTask) => {
    const cTime = new Date()
    setTaskList(taskList =>
      [
        ...taskList,
        {
          id: nextId,
          title: newTask,
          time: [cTime.getHours(), cTime.getMinutes(), cTime.getSeconds()]
        }
      ]
    )
    setNextId(nextId + 1)
  }

  const modCallBack = (preTask, newTask) => {
    console.log(preTask, newTask)
    const cTime = new Date()
    setTaskList(taskList =>
      taskList.map(task => task.title === preTask ? {...task, title: newTask, time: [cTime.getHours(), cTime.getMinutes(), cTime.getSeconds()]} : task)
    )
  }

  const remCallBack = (preTask) => {
    console.log(preTask)
    setTaskList(taskList =>
      taskList.filter(task => task.title !== preTask)
    )
  }

  return (
    <MainPage
      tList={taskList}
      add={addCallBack}
      mod={modCallBack}
      rem={remCallBack} 
    />
  )
  
}