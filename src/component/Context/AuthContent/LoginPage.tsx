import { useContext } from 'react'
import { useAuth } from './providerContext'
import { RouterAuthContext } from '../../Router/RouterAuth'
import { useNavigate } from 'react-router'

const LoginPage = () => {

    const {user , login , logout } = useAuth()
    const routerAuth = useContext(RouterAuthContext)
    const navigate = useNavigate()

    const handleLogin = () => {
        login("Admin")
        routerAuth?.LogginIn()
        navigate("/navigate")
    }

    const handleLogout = () => {
        logout()
        routerAuth?.Loggout()
        navigate("/login")
    }

  return (
    <>
    {
        user ? `Hello ${user}` : "Guest"
    }
    <button onClick={handleLogin}>
        Login
    </button>

    <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default LoginPage