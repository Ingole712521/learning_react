import React from 'react'


interface CounterProps {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>
}

const Count: React.FC<CounterProps> = ({ count, setCount }) => {







    return (
        <div>

            <button onClick={() => setCount(count + 1)}>
                Count : {count}
            </button>
        </div>
    )
}

export default Count