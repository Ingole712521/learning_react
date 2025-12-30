import React from 'react'

interface toggleProps {
    isOnline: boolean,
    toggleStatus: () => void
}


const ToggleChild: React.FC<toggleProps> = ({ isOnline, toggleStatus }) => {



    return (
        <>

            <div className='flex flex-col gap-4'>

                <button onClick={toggleStatus} className='uppercase  text-white'>
                    toggleStatus
                </button>

                <p>{isOnline ? "Online" : "Offline"}</p>


            </div>
        </>
    )
}

export default ToggleChild