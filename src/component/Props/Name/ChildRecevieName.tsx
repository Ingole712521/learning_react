import React from 'react'

interface greeting {
    name? :string;
}

const ChildRecevieName:React.FC<greeting> = ({name}) => {
  return (
    <div>

        <h1>
            Hello from the parent {name}
        </h1>
    </div>
  )
}

export default ChildRecevieName