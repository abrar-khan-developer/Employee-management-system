import React, { useEffect, useState } from 'react'

function Header(props) {

  const [userName , setUserName] = useState('')

  useEffect(() => {
      if(!props.data){
        setUserName('Admin')
      }else{
        setUserName(props.data.firstName)
      }
  },[])

  const userLogOut = () => {
    localStorage.setItem('loggedInUser','')
    // window.location.reload()
    props.changeUser('')
  }

  return (
    <div className = "flex items-end justify-between text-white">
      <h1 className="text-2xl font-medium">Hello <br /> <span className = "text-3xl font-semibold">{userName} 👋</span>  </h1>
      <button 
        className='bg-red-600 text-lg font-medium rounded-sm  px-5 py-2 hover:cursor-pointer active:bg-red-400'
        onClick={userLogOut}
      >Log Out</button>
    </div>
  )
}

export default Header
