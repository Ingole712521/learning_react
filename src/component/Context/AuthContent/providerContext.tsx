import React, { useContext, useState } from 'react'
import { AuthContext } from './createContext'




export const ProviderContext = ({ children }: { children: React.ReactNode }) => {
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


export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}