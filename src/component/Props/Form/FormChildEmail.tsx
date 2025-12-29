import React from "react";

interface FormChildEmailProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

const FormChildEmail: React.FC<FormChildEmailProps> = ({ email, setEmail }) => {
  return (
    <div>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
    </div>
  );
};

export default FormChildEmail;
