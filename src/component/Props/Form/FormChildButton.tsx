import React from "react";

interface FormChildButtonProps {
  isValid: Boolean;
}

const FormChildButton: React.FC<FormChildButtonProps> = ({ isValid }) => {
  return (
    <div>
      <button disabled={!isValid}>Submit button</button>
    </div>
  );
};

export default FormChildButton;
