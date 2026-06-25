import React, {useEffect} from 'react'

function AuthContext({children}) {
    useEffect(() => {
        setLocalStorage()
        getLocalStorage()
    },)
  return (
    <div>
      {children}
    </div>
  )
}

export default AuthContext
