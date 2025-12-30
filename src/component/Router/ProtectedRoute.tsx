import React, { useContext } from 'react'
import { RouterAuthContext, RouterAuthProvider } from './RouterAuth'

const ProtectedRoute = ({children} : {children : React.ReactNode}) => {

    const isAuth = useContext(RouterAuthContext)
    console.log(isAuth);
  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute