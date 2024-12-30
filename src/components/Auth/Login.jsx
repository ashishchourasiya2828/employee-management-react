import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const loginHandler = (e) => {
        e.preventDefault()
        handleLogin(Email, Password);
        // console.log(Email);
        // console.log(Password);
        setEmail("")
        setPassword("")

        

    }

  return (
    <div className='h-screen w-screen bg-zinc-900 flex items-center justify-center  '>
        <div className='border-2  py-4 px-10  h-4/5 flex flex-col  justify-between border-red-800 rounded-md' >
        <h1 className='text-white text-2xl  font-bold' >Log in </h1>
        <form onSubmit={(e)=>{loginHandler(e)}} className='flex flex-col w-80 items-center h-[55%] justify-start '  >
            <input onChange={(e)=>{setEmail(e.target.value)}} value={Email} className='px-4 py-2 rounded-full text-white outline-none w-full border-2 mb-6 border-red-800 bg-transparent placeholder-zinc-400'  type="email" placeholder='Enter your Email' />
            <input onChange={(e)=>{setPassword(e.target.value)}} value={Password}  className='px-4 py-2 rounded-full text-white outline-none w-full border-2  border-red-800 bg-transparent placeholder-zinc-400' type="password" placeholder='Enter your Password' />
            <button  className='text-white px-5 py-2 w-full font-bold rounded-full mt-[8vh] text-xl bg-red-800' >Log in</button>
        </form>

        </div>

    </div>
  )
}

export default Login