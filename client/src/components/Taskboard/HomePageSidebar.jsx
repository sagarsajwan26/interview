import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../../store/adminSlice';





function HomePageSidebar() {
  const selectedTask= useSelector(state=> state.adminSlice.selectedTask)
  console.log(selectedTask);
  
  

   const sideLinks= [{
   name: "homepage",
   path:'/homepage'
    
},{
    name:    "assignTask",
    path:`/homepage/taskAssign/${selectedTask?._id?selectedTask._id:""}`
    
}]
const navigate= useNavigate()
  const dispatch= useDispatch()
const handleLogout=()=>{
  dispatch(logout())
  localStorage.clear()
  navigate('/')
}
  
  const user= localStorage.getItem('email')
  return (
    <div className='flex flex-col justify-between h-screen pb-20'>
      <div className='p-5 '>
      <h1 className='text-xl mb-6 '>{user}</h1>
      <div className='flex flex-col gap-5'>
        {sideLinks?.map((link,index)=>(
          <NavLink  key={index} to={link.path} className='bg-zinc-800 px-5 rounded-xl py-3'>
            {link.name}
          </NavLink>
        ))}
      </div>
      

    </div>
    <button onClick={handleLogout} className='px-6 py-3 bg-red-500 mx-10 rounded-md hover:bg-red-600' >
      logout
    </button>
    </div>
  )
}

export default HomePageSidebar
