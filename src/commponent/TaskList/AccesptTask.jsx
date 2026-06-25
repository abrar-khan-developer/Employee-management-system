import React from 'react'

function AccesptTask({data}) {
    // console.log(data)
  return (
      <div className = "shrink-0 h-full w-75 rounded-xl bg-red-400 p-5">

            <div className = 'flex justify-between items-center'>
                <h3 className = "bg-red-500 px-3 py-1 rounded text-sm"> {data.category} </h3>
                <h4 className = 'text-sm'>{data.taskDate}</h4>
            </div>

            <h2 className = 'text-2xl font-semibold mt-5'>{data.taskTitle}</h2>
            <p className = 'text-sm mt-2'>{data.taskDescription}</p>

            <div className='flex justify-between mt-4'>
                <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
                <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
            </div>
      </div>
  )
}

export default AccesptTask
