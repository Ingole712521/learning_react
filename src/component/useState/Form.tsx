import React, { useState } from "react";

interface SignForm {
  username: string;
  password: string;
}

const Form: React.FC = () => {
  const initialvalue = { username: "", password: "" };

  const [userInput, setUserInput] = useState<SignForm>(initialvalue);

  const setUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput((prev) => ({ prev, ...userInput, username: e.target.value }));
    console.log(userInput);
  };

  const setPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput((prev) => ({ prev, ...userInput, password: e.target.value }));
    console.log(userInput);
  };

  return (
    <div>
      <form action="submit">
        <label htmlFor="username"> userName</label>
        <input
          type="text"
          placeholder="Username type here"
          onChange={(e) => {
            setUsername(e);
          }}
        />

        <label htmlFor="password"> Password</label>
        <input
          type="text"
          placeholder="Password type here"
          onChange={(e) => {
            setPassword(e);
          }}
        />
      </form>
    </div>
  );
};

export default Form;
