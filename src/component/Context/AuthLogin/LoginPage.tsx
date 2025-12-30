import React, { useContext } from 'react'
import { AuthContext } from './createContext'

const LoginPage = () => {

    const auth = useContext(AuthContext)
    console.log(auth)


    const handleLogout = () => {
        console.log("handleLogout button clicked ");
        auth?.logout();
    }

    const handleLogin = () => {
        console.log("handleLogin button clicked ");
        auth?.login();
    }

    return (
        <>
            {auth?.isLoggedIn ?

                (
                    <div>
                        <p>
                            Welcome to the login page
                        </p>
                        <button onClick={handleLogout} >
                            Logout
                        </button>
                    </div>
                )


                : (
                    <div>
                        <p>     Please Login  </p>
                        <button onClick={handleLogin}>
                            Login
                        </button>
                    </div>
                )
            }
        </>
    )
}


export default LoginPage