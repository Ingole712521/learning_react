import React, { useState } from "react";
import LearpChildone from "./learpChildone";
import LeapChildTwo from "./leapChildTwo";

const LeapParent = () => {
  const [text, setText] = useState("");
  return (
    <>
      <LearpChildone text={text} setText={setText} />
      <LeapChildTwo text={text} />
    </>
  );
};

export default LeapParent;
