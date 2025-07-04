import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateTask } from '../../store/admin.thunk'

function EditTask() {
  const selectedTask= useSelector(state=> state.adminSlice.selectedTask)

  const [title, setTitle] = useState(selectedTask?.title || "")
  const [description, setdescription] = useState(selectedTask?.title || "")
  const [priority, setpriority] = useState(selectedTask?.title || "")
  const [status, setstatus] = useState(selectedTask?.title || "")
 const dispatch= useDispatch()
 const navigate= useNavigate()
const handleUpdate= (e)=>{
  e.preventDefault()
  dispatch(updateTask({title, description,priority,status,taskId:selectedTask._id}))
  navigate('/homepage')
}

  
  return (
    <div>
      <h1>Edit task </h1>
        <form action="" onSubmit={handleUpdate} >
          <input type="text" value={title} onChange={e=> setTitle(e.target.value)} />
          <input type="text" value={description} onChange={e=> setdescription(e.target.value)} />
          <label htmlFor="priority">Priority</label>
          
          <select name="" id="priority" value={priority} onChange={e=>setpriority(e.target.value)}>
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
          </select>

        <label htmlFor="status" id="">Status</label>
       <select name="" id="status"  value={status} onChange={e=> setstatus(e.target.value)}>
          <option value="pending">pending</option>
         <option value="in progress">in progress</option>
         <option value="completed">completed</option>
       </select>

       <button type="submit">update</button>
        </form>
    </div>
  )
}

export default EditTask
