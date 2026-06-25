import React from 'react'

function TaskListNumber({data}) {
  return (
    <div className='flex justify-between gap-5 mt-10'>
      
      <div className="py-6 px-9 rounded-xl w-[45%] bg-red-400">
            <h2 className = "text-2xl font-medium">{data.taskCount.newTask}</h2>
            <h3 className = "text-xl font-semibold">New Taskt</h3>
      </div>
      <div className="py-6 px-9 rounded-xl w-[45%] bg-green-400">
            <h2 className = "text-2xl font-medium">{data.taskCount.active}</h2>
            <h3 className = "text-xl font-semibold">Active Task</h3>
      </div>
      <div className="py-6 px-9 rounded-xl w-[45%] bg-blue-400">
            <h2 className = "text-2xl font-medium">{data.taskCount.completed}</h2>
            <h3 className = "text-xl font-semibold">Completed Taskt</h3>
      </div>
      <div className="py-6 px-9 rounded-xl w-[45%] bg-yellow-400">
            <h2 className = "text-2xl font-medium">{data.taskCount.failed}</h2>
            <h3 className = "text-xl font-semibold">Failed Taskt</h3>
      </div>
    </div>
  )
}

export default TaskListNumber
