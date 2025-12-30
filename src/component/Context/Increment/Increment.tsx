import React, { useContext } from 'react'
import { CounterContext } from './CreateContext'

const Increment = () => {
    const counter = useContext(CounterContext);
    console.log(counter);
    if (!counter) return null
    return (
        <div>
            <p>
                {counter.count}
            </p>

            <button onClick={counter.increment}>
                + Increment

            </button>
        </div>
    )
}

export default Increment