import React, { Component, } from 'react'
import { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Login = ({ handleLogin }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const userData = useContext(AuthContext)
  const submitHandler = (e) => {
    e.preventDefault();

    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();

    console.log("email is", cleanEmail);
    console.log("password is", cleanPassword);

    handleLogin(cleanEmail, cleanPassword);

    setEmail("");
    setPassword("");
  };

  return (
    <div className='bg-black  h-screen w-screen flex items-center justify-center'>
      <div className='bg-gray-500 rounded-2xl border-2 border-gray-500 p-9'>
        <form onSubmit={
          (e) => {
            submitHandler(e)
          }}
          className='flex flex-col items-center justify-center'>
          <input value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            required className='outline-none bg-gray-300 border-2 border-amber-600 py-3 px-4 rounded-full placeholder:text-gray-600' type='email' placeholder='Enter your email' />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required className='outline-none bg-gray-300 border-2 border-amber-600 py-3 px-4 rounded-full mt-10 placeholder:text-gray-600' type='password' placeholder='Enter your password' />
          <button className='outline-none  border-none bg-amber-600 py-3 px-4 rounded-full mt-10'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login

