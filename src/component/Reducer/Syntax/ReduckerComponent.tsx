import React, { useReducer } from 'react'
import { reducer } from './ReduckerFunction'

const ReduckerComponent = () => {

    const [count, dispatch] = useReducer(reducer, 0)


    return (
        <>
            <p>Count : {count}</p>
            <button onClick={()=> dispatch({type: "increment"})} >Increment + </button>
            <button onClick={()=> dispatch({type: "decrement"})} >Decrement - </button>

        </>
    )
}

export default ReduckerComponent