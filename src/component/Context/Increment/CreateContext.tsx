import { createContext } from "react";

interface CounterContextType {
    count : number;
    increment : ()=>void;
}

export const CounterContext = createContext<CounterContextType | null >(null);