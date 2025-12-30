import { createContext, useState } from "react";
import { useSearchParams } from "react-router";

interface RouterAuthProps{
    isAuth : boolean;
    LogginIn : () => void;
    Loggout: ()=> void
}

export const RouterAuthContext = createContext<RouterAuthProps | null>(null)


export const RouterAuthProvider = ({children} : {children : React.ReactNode}) => {
    const [isAuth , setIsAuth] =  useState(false)

    const LogginIn = () => {
        setIsAuth(true);
    }

    const Loggout = () => {
        setIsAuth(false)
    }


    return (
        <RouterAuthContext.Provider value= {{isAuth , LogginIn , Loggout}}>
            {children}
        </RouterAuthContext.Provider>
    )
 
}