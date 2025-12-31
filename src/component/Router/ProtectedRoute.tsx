import React, { useContext } from 'react'
import { RouterAuthContext } from './RouterAuth'
import { Navigate } from 'react-router'

const ProtectedRoute = ({children} : {children : React.ReactNode}) => {

    const isAuth = useContext(RouterAuthContext)
    
    if (!isAuth?.isAuth) {
        return <Navigate to="/login" replace />
    }
    
    return <>{children}</>
}

export default ProtectedRoute