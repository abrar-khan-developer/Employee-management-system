import React from 'react'

function CreateTask() {
  return (
     <div className='p-5 bg-[#1c1c1c] mt-7 roounded'>
            <form 
                className='flex w-full flex-wrap items-start justify-between'
            >
                <div className = "w-1/2">

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input 
                            type = "text" 
                            placeholder = "Task Title"   
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
                        />
                    </div>
                    <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'> Date </h3>
                    <input 
                        type = "date"  
                        className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
                    />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                        <input type = "text" 
                        placeholder = "Employee Name" 
                        className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'> Category </h3>
                        <input 
                            type = "text" 
                            placeholder = "Design, Dev etc" 
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
                        />
                    </div>

                </div>
           
                <div className='w-1/2'>

                    <h3 className='text-sm text-gray-300 mb-0.5'> Description </h3>
                    <textarea 
                        placeholder='Description'
                        cols = "30" 
                        rows = "10" 
                        name = "" 
                        id = "" 
                        className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400"
                    >

                    </textarea>
                    <button
                        className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 text-sm rounded mt-4 w-full'
                      >
                        Create Task
                    </button>
                </div>

            </form>
        </div>
  )
}

export default CreateTask
