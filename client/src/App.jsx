import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProtectedRoute from './components/ProtectedRoute'
import Homepage from './components/Taskboard/Homepage'
import MainHomepage from './components/Taskboard/MainHomepage'
import AssignTask from './components/Taskboard/AssignTask'
import EditTask from './components/Taskboard/EditTask'

function App() {
  return (
    <BrowserRouter >
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>

    <Route element={<ProtectedRoute/>} >
    <Route path='/homepage' element={<Homepage/>} >
      <Route path='' element={<MainHomepage/>}/>
      <Route path='edit_user/:taskId' element={<EditTask/>}   />
      <Route path='taskAssign' element={<AssignTask/>} />    
    </Route>
    </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App