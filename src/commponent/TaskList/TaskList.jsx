import React from 'react'
import AccesptTask from './AccesptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

function TaskList({data}) {
  console.log("TaskList Render");
console.log(data.tasks);
  return (
    <div id = 'taskList' className = "overflow-x-auto h-[55%] w-full mt-10 py-5  flex items-center      justify-start gap-5 flex-nowrap">

      {data.tasks.map( (elem, ind) => {
           console.log({
          title: elem.taskTitle,
          active: elem.active,
          newTask: elem.newTask,
          completed: elem.completed,
          failed: elem.failed,
        })
        if(elem.active){
          return  <AccesptTask key = {ind} data = {elem}/>
        }
        if(elem.newTask){
          return  <NewTask key = {ind} data = {elem}/>
        }
        if(elem.completed){
          return  <CompleteTask key = {ind} data = {elem}/>
        }
        if(elem.failed){
          return  <FailedTask key = {ind} data = {elem}/>
        }

      })}
     
      
      
      

    </div>
  )
}

export default TaskList
