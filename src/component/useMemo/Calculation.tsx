import React, { useMemo, useState } from 'react'

const Calculation = () => {

    const [count, setCount] = useState(0);

    const expensiveCalculation = (num: number) => {
        let total = 0;
        for (let i = 0; i < 100; i++) {
            total += num;

        }
        console.log(total)
        return total;
    }


    const result = useMemo(() => {

        return expensiveCalculation(count);
    }, [count]);


    return (
        <div>


            <p>
                Result : {result}
            </p>
            <button onClick={() => setCount(count + 1)}>
                Count {count}

            </button>
        </div>
    )
}

export default Calculation