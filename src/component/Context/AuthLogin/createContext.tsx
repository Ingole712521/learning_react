import { createContext } from "react";

interface AuthProviderProps {
    isLoggedIn: boolean;
    login : () =>void;
    logout: ()=> void; 
}

export const AuthContext = createContext<AuthProviderProps | null>(null)