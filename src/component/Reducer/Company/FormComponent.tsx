import React, { useReducer } from 'react'
import { FormReducker } from './FormReducker'

const FormComponent = () => {


    const [state, dispatch] = useReducer(FormReducker, {
        email: "",
        name: "",
        password: ""
    })

    return (
        <div>

            <input value={state.name} onChange={(e) => dispatch({
                type: "Update_field",
                field: "name",
                value: e.target.value
            })} />

            <input value={state.email} onChange={(e) => dispatch({
                type: "Update_field",
                field: "email",
                value: e.target.value
            })} />

            <button onClick={() => dispatch({ type: "REST" })}>
                Reset
            </button>

        </div>
    )
}

export default FormComponent