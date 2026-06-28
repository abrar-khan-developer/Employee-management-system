import React from 'react'

function NewTask({data}) {
  console.log('khan data in accept task',data.newTask,data.active,data.completed,data.failed)

  function AcceptTaskt(){
    data.newTask = false
    data.active = true
    console.log('accept task is working')
  }
  return (

    <div className = "shrink-0 h-full w-75 rounded-xl bg-green-400 p-5">

        <div className = 'flex justify-between items-center'>
            <h3 className = "bg-red-500 px-3 py-1 rounded text-sm"> {data.category} </h3>
            <h4 className = 'text-sm'>{data.taskDate}</h4>
        </div>

        <h2 className = 'text-2xl font-semibold mt-5'>{data.taskTitle}</h2>
        <p className = 'text-sm mt-2'>{data.taskDescription}</p>

        <div className='mt-4'>
            <button 
              className='w-full bg-amber-600 hover:cursor-pointer active:bg-amber-400'
              onClick={AcceptTaskt}
              > Accept Task </button>
        </div>
    </div>
  )
}

export default NewTask
