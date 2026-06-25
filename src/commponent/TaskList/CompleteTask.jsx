import React from 'react'

function CompleteTask({data}) {
  return (
     <div className = "shrink-0 h-full w-75 rounded-xl bg-blue-400 p-5">

            <div className = 'flex justify-between items-center'>
                <h3 className = "bg-red-500 px-3 py-1 rounded text-sm"> {data.category} </h3>
                <h4 className = 'text-sm'>{data.taskDate}</h4>
            </div>

            <h2 className = 'text-2xl font-semibold mt-5'>{data.taskTitle}</h2>
            <p className = 'text-sm mt-2'>{data.taskDescription}</p>

            <div className='mt-2'>
                <button className='w-full bg-green-500'>Completed</button>
            </div>
      </div>
  )
}

export default CompleteTask
