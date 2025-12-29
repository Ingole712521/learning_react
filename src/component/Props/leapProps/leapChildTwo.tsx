import React from 'react'

interface LeapChildTwoProps {
    text?: string;
}

const LeapChildTwo: React.FC<LeapChildTwoProps> = ({text}) => {


  return (
    <div>
        <h2>
            You Typed this content : {text}
        </h2>
    </div>
  )
}

export default LeapChildTwo;