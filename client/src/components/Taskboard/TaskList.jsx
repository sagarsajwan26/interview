import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteTask, getParticulartask, getTask } from '../../store/admin.thunk'
import { useEffect } from 'react'


function TaskList({task}) {
const dispatch= useDispatch()
const navigate= useNavigate()
  const handleEdit= async()=>{
    // console.log(task._id);
    
await dispatch(getParticulartask(task._id))
navigate(`/homepage/edit_user/${task._id}`)
}
const handleDelete=async()=>{
  await dispatch(deleteTask(task._id))
   await dispatch(getTask())
}

  
  return (
    <div className='px-8 w-full bg-zinc-400 flex justify-between gap-3 mb-3 mx-4 rounded-md' >
     
      <div className='w-full grid grid-cols-3'> 
     <div  className='col-span-1'  >
       <p className='font-bold'>
        {task.title}
      </p>
      <p>{task.description}</p>
     </div>
     <div className='col-span-1' >
      <h1 className='font-bold'>Assigned to</h1>
      <p>{task.assignedTo.username}</p>
      <p>{task.assignedTo.email}</p>
     </div>
     <div className='col-span-1' >
      <h1 className='font-bold'>status</h1>
      <p>{task.status}</p>
      <p>{task.priority}</p>
     </div>
        
      </div  >
      <div className='flex items-center gap-5'>
        
        <button  
        onClick={handleDelete}
        className='bg-red-500 px-5 py-2 rounded-xl '>delete</button>
      <button 
      onClick={handleEdit}
      className='bg-yellow-500 px-5 py-2 rounded-xl '>edit</button>
      
      </div>
    </div>
  )
}

export default TaskList
