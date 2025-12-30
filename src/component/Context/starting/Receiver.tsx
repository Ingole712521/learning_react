import React, { useContext } from 'react'
import { NameContext } from './MainFile'

const Receiver = () => {

    const name = useContext(NameContext);
    console.log(name)


    return (
        <div>


            <h1 className='text-white text-3xl font-extrabold '>
                THis is the text from the mainfile {name}

            </h1>
        </div>
    )
}

export default Receiver