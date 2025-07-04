import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

function ProtectedRoute() {
 const [authenticated, setIsAuthenticated] = useState(false)
const email = localStorage.getItem('email')

 

useEffect(()=>{
  if(email) setIsAuthenticated(true)
    else {
  navigate('/')}

 },[email])
  
  return  <Outlet/> 
}

export default ProtectedRoute
