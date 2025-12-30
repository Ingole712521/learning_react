import { createContext } from "react";

interface AuthContextProps {
    login: (name : string) => void;
    logout: () => void;
    user: string | null;

}



export const AuthContext = createContext<AuthContextProps | undefined>(undefined)