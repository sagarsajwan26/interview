import React, { useEffect } from 'react'
import HomePageSidebar from './HomePageSidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getTask, getUsers } from '../../store/admin.thunk'

function Homepage() {
  const navigate= useNavigate()
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getUsers())
  },[dispatch, navigate])
  
  useEffect(()=>{
    dispatch(getTask())
  },[dispatch,navigate])
  return (
    <div className='grid grid-cols-6 text-white' >
  <div className='col-span-1 h-screen bg-zinc-700'>
    <HomePageSidebar/>
  </div>
<div className='col-span-5 bg-zinc-900 h-screen'>
        <Outlet/>
</div>
    </div>
  )
}

export default Homepage
