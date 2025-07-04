import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { assignTask } from '../../store/admin.thunk'
import { useNavigate } from 'react-router-dom'

function AssignTask() {
  const {register ,handleSubmit} = useForm()
const users= useSelector(state=> state.adminSlice.users)
const dispatch = useDispatch()
const navigate= useNavigate()


  const handleAssignTask=async(form)=>{
    // console.log(form);
    await  dispatch(assignTask(form))
    
    navigate('/homepage')
  }
  
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <h1 className='text-3xl'>Assign task</h1>
      <form action="" onSubmit={handleSubmit(handleAssignTask)} className='flex flex-col gap-5 p-5'>
        <label htmlFor="title">title</label>
          <input 
          type="text"
           name="" 
           id="title"

            className='border border-white text-white'
             placeholder='enter your title' 
           {...register('title',{required:true})}
             
             />
 <label htmlFor="description">description</label>
          <input type="text" name="" id="description" className='border border-white text-white' placeholder='enter your description'
               {...register('description',{required:true})}
          
          />
          
          <label htmlFor="priority"
             
          >Priority</label>
          <select name="" id="priority"   {...register('priority',{required:true})}>
            <option value="">select</option>
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
            
          </select >
          <label htmlFor="assign">assignTo</label>
          <select name="" id="assign"      {...register('assignedTo',{required:true})}>
            <option value="">select</option>
          {
            users.length!==0 ?  users.map(user=>(
               <option key={user._id} value={user._id}>{user.username}</option>
            )) :null
          }
          </select>
    <button type="submit">
      Assign
    </button>
         </form>
    </div>
  )
}

export default AssignTask
