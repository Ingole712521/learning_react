import React, { useState } from 'react'
import ToggleChild from './ToggleChild'

const ToggleParent = () => {
    const [isOnline, setIsOnline] = useState(false);


    const toggleStatus = () => {
        setIsOnline((prev) => !prev)
    }

    return (
        <div>
            <ToggleChild isOnline={isOnline} toggleStatus={toggleStatus} />



        </div>
    )
}

export default ToggleParent