import React, { useContext } from 'react'
import { RouterAuthContext } from './RouterAuth'

const Navigatin = () => {

    const isAuth = useContext(RouterAuthContext)
    console.log(isAuth)
  return (
    <div>
        <p>
            This is Navigation page {isAuth?.isAuth ? "Authenticated" : "Unauthenticated"}
        </p>
    </div>
  )
}

export default Navigatin