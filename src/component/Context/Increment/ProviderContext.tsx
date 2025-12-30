import React, { useState } from 'react'
import { CounterContext } from './CreateContext';



const ProviderContext = ({ children }: { children: React.ReactNode }) => {

    const [count, setCount] = useState(0)
    const increment = () => setCount(prev => prev + 1);

    return (
        <div>
            <CounterContext.Provider value={{ count, increment }}>
                {children}
            </CounterContext.Provider>

        </div>
    )
}

export default ProviderContext