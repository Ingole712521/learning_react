import React from 'react'

interface ButtonParentProps {
    onClick: () => void;
}

const ButtonChild: React.FC<ButtonParentProps> = ({ onClick }) => {
    return (
        <div>

            <button onClick={onClick}>
                Click me
            </button>

        </div>
    )
}

export default ButtonChild