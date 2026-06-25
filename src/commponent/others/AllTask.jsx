import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function AllTask() {

 const authData =  useContext(AuthContext)
 console.log(authData.employees)
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5'>

      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
          <h2 className='text-lg font-medium w-1/5 '>Employee Name</h2>
          <h3 className='text-lg font-medium w-1/5 '>New Task</h3>
          <h5 className='text-lg font-medium w-1/5 '>Active Task</h5>
          <h5 className='text-lg font-medium w-1/5 '>Completed</h5>
          <h5 className='text-lg font-medium w-1/5 '>Failed</h5>
      </div>

      
    <div className='overflow-auto'>
            {authData.employees.map((elem) => {
              return  <div className=' mb-2 py-2 px-4 flex justify-between rounded bg-emerald-500'>
                          <h2 className='text-lg font-medium w-1/5 '>{elem.firstName}</h2>
                          <h3 className='text-lg font-medium w-1/5 text-blue-800!'>{elem.taskCount.newTask}</h3>
                          <h5 className='text-lg font-medium w-1/5 text-yellow-400!'>{elem.taskCount.active}</h5>
                          <h5 className='text-lg font-medium w-1/5 text-white!'>{elem.taskCount.completed}</h5>
                          <h5 className='text-lg font-medium w-1/5 text-red-600!'>{elem.taskCount.failed}</h5>
                      </div>
          })}
    </div>
     
    
    </div>
  )
}

export default AllTask
