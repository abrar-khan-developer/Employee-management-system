import React from 'react'

function Login() {
  return (

        <div className = "flex h-screen w-screen items-center justify-center">

          <div className="border-2 border-red-600">
            <form className = "flex flex-col items-center justify-center">
                <input 
                    className = "text-black outline-none text-xl bg-transparent border-2 border-emerald-600 rounded-full py-4 px-5 placeholder:text-white"  
                    type = "email" placeholder = "Enter your email" />

                <input 
                    className = "text-black outline-none text-xl bg-transparent border-2 border-emerald-600 rounded-full py-4 px-5 mt-3 placeholder:text-white"  
                    type = "password" placeholder = "Enter password" />

                <button className = " bg-emerald-600 text-white py-4 px-10 rounded-full mt-4"> Login </button>
                
            </form>
          </div>

        </div>
 
  )
}

export default Login
