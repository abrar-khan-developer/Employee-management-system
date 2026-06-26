import React, { useContext, useEffect, useState } from 'react'
import './index.css'
import AdminDashboard from './commponent/Dashboard/AdminDashboard'
import EmployeeDashboard from './commponent/Dashboard/EmployeeDashboard'
import Login from './commponent/Auth/Login'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

// localStorage.clear()

function App() {

  const [user , setUser] = useState(null)
  const [loggedInUserData , setLoggedInUserData] = useState(null)

  const [userData, setUserData] = useContext(AuthContext)

  // useEffect(() => {
  //  const loggedInUser = localStorage.getItem('loggedInUser')
  //   if(loggedInUser){
  //     setUser(loggedInUser.role)
  //   }
  // },[authData]) 

useEffect(() => {

  const loggedInUser = localStorage.getItem('loggedInUser')

  if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    setUser(userData)
    setLoggedInUserData(userData.data)
  }
},[])

  const handleLogin = (email, password) => {

    if(email == 'admin@me.com' && password == '123'){
        setUser({role : 'admin'})
        localStorage.setItem("loggedInUser",JSON.stringify({role : 'admin'}))

    }else if(userData){
      // console.log('authdata if else',userData)
      let employee = userData.employees.find((e) => email == e.email && password == e.password)
      if(employee){
        setUser({role : 'employee'})
        setLoggedInUserData(employee)
        // localStorage.setItem("loggedInUser",JSON.stringify({role : 'employee', data : employee}))
      }
        
    }else{

     }
  }

  return (
    <>
  
      {!user ? <Login handleLogin = {handleLogin}/> : ''}
   
      {user?.role == 'admin' ? <AdminDashboard changeUser = {setUser}/> : (user?.role == 'employee' ? <EmployeeDashboard  data = {loggedInUserData} changeUser = {setUser}/>: null) }
   
    </>
  )
}

export default App
