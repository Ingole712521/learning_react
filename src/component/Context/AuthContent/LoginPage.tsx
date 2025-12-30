import React, { useContext } from 'react'
import { AuthContext } from './createContext'
import { authContext } from './providerContext'

const LoginPage = () => {

    const {user , login , logout } = authContext()

  return (
    <>
    {
        user ? `Hello ${user}` : "Guest"
    }
    <button onClick={()=> login("Admin")}>
        Login

    </button>


    <button onClick={logout}>Logout</button>
    </>
  )
}

export default LoginPage