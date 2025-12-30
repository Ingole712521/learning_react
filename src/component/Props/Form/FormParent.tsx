import  { useState } from 'react'
import FormChildButton from './FormChildButton';
import FormChildEmail from './FormChildEmail';

const FormParent = () => {
  const [email, setEmail] = useState("");
  const isValid = email.includes("@")
  return (
    <div>

      <FormChildEmail email={email} setEmail={setEmail} />
      <FormChildButton isValid={isValid} />

    </div>
  )
}

export default FormParent;