import React, { useContext, useState } from 'react'
import { AuthContext } from './createContext'




export const roviderContext = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<string | null>(null)

    const login = (name: string) => {
        setUser(name)
    }
    const logout = () => {
        setUser(null)
    }



    return (
        <AuthContext.Provider value={{ user, login, logout, }} >
            {children}
        </AuthContext.Provider>
    )
}



export const authContext = ()  =>{
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("UseAuth Must be inside aithProvider")
    }
}