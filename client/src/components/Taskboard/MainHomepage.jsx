import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import TaskList from './TaskList';

function MainHomepage() {

  const taskList= useSelector(state=> state.adminSlice.tasks)

  
  return (
    <div>
    <h1 className='text-4xl mb-5 text-center mt-4' >Task list</h1>
    <div className='w-full flex flex-col gap-3'>
      {taskList  ? taskList.map(list=>(
        <TaskList key={list._id} task={list} />
      )):null }
    </div>
    </div>
  )
}

export default MainHomepage
