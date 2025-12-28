import React, { useState } from "react";

const Toggle: React.FC = () => {
  const [isOn, SetisOn] = useState<boolean>(false);
  const toggle = () => {
    SetisOn((previsOn) => !previsOn);
  };
  return (
    <div>
      <p>{isOn ? "on" : "off"}</p>

      <button onClick={toggle}>Toggle button</button>
    </div>
  );
};

export default Toggle;
