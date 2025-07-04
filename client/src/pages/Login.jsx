import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../utils/axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { adminLogin } from '../store/admin.thunk'

function Login() {
    const [username, setUsername]= useState('sagar')
    const [password, setPassword]= useState('1')
    const disaptch= useDispatch()
    const adminEmail = useSelector(state=>state.adminSlice.admin)
    const navigate= useNavigate()

    const handleLogin= async(e)=>{
        e.preventDefault()
      await disaptch(adminLogin({username,password}))
           

    }

    useEffect(()=>{
       if(adminEmail){
          localStorage.setItem('email',adminEmail.email)
      navigate('/homepage')
       }
    },[adminEmail,navigate])


  return (
    <div className='h-screen w-full bg-zinc-900 text-white text-center text-3xl'>
        <h1 className='p-7'>User login page</h1>
        <form action="" onSubmit={handleLogin} className='h-full w-full bg-zinc-800 flex flex-col items-center justify-center gap-8'>

            <label htmlFor="username">Enter your admin username</label>
            <input 
            value={username}
            onChange={e=>setUsername(e.target.value)}
             type="text" id='username'  className='outline-white border  border-white '/>
            <label htmlFor="password">Enter your admin password</label>
            <input
            value={password}
            onChange={e=>setPassword(e.target.value)}
            type="text" id='password' className='outline-white border  border-white' />
            <button type="submit" className='bg-cyan-300 px-5 rounded-xl' 
          
            >LOGIN</button>
        </form>

    </div>
  )
}

export default Login