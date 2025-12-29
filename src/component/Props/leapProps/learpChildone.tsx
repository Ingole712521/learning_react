import React from "react";

interface LearpChildoneProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const LearpChildone: React.FC<LearpChildoneProps> = ({ text, setText }) => {
  return (
    <>
      <div className="">
        <input
          type="text"
          value={text}
          name="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default LearpChildone;
