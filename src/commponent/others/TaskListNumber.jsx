import React from 'react'

function TaskListNumber() {
  return (
    <div className='flex justify-between gap-5 mt-10'>
      <div className="py-6 px-9 rounded-xl w-[45%] bg-red-400">
            <h2 className = "text-2xl font-medium">0</h2>
            <h3 className = "text-xl font-semibold">New Taskt</h3>
      </div>
      <div className="py-6 px-9 rounded-xl w-[45%] bg-green-400">
            <h2 className = "text-2xl font-medium">0</h2>
            <h3 className = "text-xl font-semibold">New Taskt</h3>
      </div>
      <div className="py-6 px-9 rounded-xl w-[45%] bg-blue-400">
            <h2 className = "text-2xl font-medium">0</h2>
            <h3 className = "text-xl font-semibold">New Taskt</h3>
      </div>
      <div className="py-6 px-9 rounded-xl w-[45%] bg-yellow-400">
            <h2 className = "text-2xl font-medium">0</h2>
            <h3 className = "text-xl font-semibold">New Taskt</h3>
      </div>
    </div>
  )
}

export default TaskListNumber
