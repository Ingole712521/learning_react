import React, { useState } from 'react'

interface SignForm {
  username: string;
  password: string;
  name: string;
  phoenumber: number;
  emailid: string
}

const Form: React.FC = () => {
  const initalValue = { username: "", password: "", name: "", phoenumber: 0, emailid: "" };
  const [userInput, setUserInput] = useState<SignForm>(initalValue);
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>()
  const [success, setSuccess] = useState<string>();

  // const setUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setUserInput((prev) => ({ prev, ...userInput, username: e.target.value }));

  // }
  // const setPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setUserInput((prev) => ({ prev, ...userInput, password: e.target.value }));
  // }
  // // console.log(userInput)

  // const setName = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setUserInput((prev) => ({ prev, ...userInput, name: e.target.value }));
  // }

  // const setEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setUserInput((prev) => ({ prev, ...userInput, emailid: e.target.value }));
  // }

  // const setNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setUserInput((prev) => ({ prev, ...userInput, phoenumber: Number(e.target.value) }));
  // }
  // console.log(userInput)


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInput(prev => ({
      ...prev,
      [name]: name === "phonenumber" ? Number(value) : value,
    }));
  }


  const setSubmitDetails = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(false);
    setError("");
    setSuccess("")

    if (!userInput.username.trim() || !userInput.password.trim()) {
      setError("Please FIll all the filed");
      setLoading(false);
      return;
    }
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userInput.username,
          password: userInput.password,
          name: userInput.name,
          emailid: userInput.emailid,
          phoenumber: userInput.phoenumber
        }),
      });
      console.log(response, "API calling login")

      if (!response.ok) {
        throw new Error("Check the credtional");
      }

      const data = await response.json();
      console.log("login successfykky ", data)
      setSuccess("Login Successfull")

    } catch (error) {
      console.log(error)
      setError("Failed to Login")
    }
    finally {
      setLoading(false)
    }
  }


  return (
    <>
      <div className='flex p-2 col-end-2'>
        <form action="" className='flex flex-col'>
          <label htmlFor="username">UserName</label>
          <input name='username' type="username" placeholder='Username' onChange={handleChange} />

          <label htmlFor="passowrd">Password</label>
          <input name='password' className='text-white ' type="password" placeholder='Password' onChange={handleChange} />

          <label htmlFor="name">Name</label>
          <input name='name' type="text" placeholder='name' onChange={handleChange} />
          <label htmlFor="emailid">Emailid</label>
          <input name='emailid' type="email" placeholder='Emailid' onChange={handleChange} />
          <label htmlFor="phoenumber">Phone Number</label>
          <input name='phonenumber' type="number" placeholder='Phone Number' onChange={handleChange} />

          <button type='submit' disabled={loading} onSubmit={setSubmitDetails}
          >
            {
              loading ? "Submitting" : "Submit"
            }
          </button>
        </form>
      </div>
    </>
  )
}

export default Form;