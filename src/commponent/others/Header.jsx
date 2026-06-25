import React from 'react'

function Header() {
  return (
    <div className = "flex items-end justify-between ">
      <h1 className="text-2xl font-medium">Hello <br /> <span className = "text-3xl font-semibold">Abrar 👋</span>  </h1>
      <button className='bg-red-600 text-lg font-medium rounded-sm text-white px-5 py-2'>Log Out</button>
    </div>
  )
}

export default Header
