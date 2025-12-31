import { createContext } from "react";

interface RouterAuthProps{
    isAuth : boolean;
    LogginIn : () => void;
    Loggout: ()=> void
}

export const RouterAuthContext = createContext<RouterAuthProps | null>(null)