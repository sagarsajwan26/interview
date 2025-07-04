import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../utils/axios";

export const adminLogin= createAsyncThunk('/admin/login',async({username, password})=>{
 
    
    try {
        const res= await axiosInstance.post('admin/loginAdmin',{username,password})
       
        
        return res.data.data.admin


        
        
    } catch (error) {
        
    }
    
})

export const getUsers= createAsyncThunk('/admin/getusers',async()=>{
    try {
        const res= await axiosInstance.get('/admin/getusers')
        // console.log(res);
        return res.data.data.users
        
    } catch (error) {
        console.log(error);
        
    }
})

export const getTask= createAsyncThunk('/admin/getTask',async()=>{
    try {
        console.log('hi')
        const res= await axiosInstance.get('/admin/getTasks')
        // console.log(res);
        return res.data.data.tasks
        
    } catch (error) {
        console.log(error);
        
    }
})

export const deleteTask= createAsyncThunk('/admin/delete',async(id)=>{
 try {
       const res= await axiosInstance.delete(`/admin/${id}/deleteTask`)
       console.log(res);
 } catch (error) {
    console.log(error);
    
 }
    
})

export const updateTask = createAsyncThunk(
  '/admin/updateTask',
  async ({ title, description, priority, status, taskId }) => {
    const res = await axiosInstance.patch(
      `/admin/${taskId}/updateTask`,
      { title, description, priority, status }
    )
    return res.data
  }
)


export const assignTask= createAsyncThunk('/admin/assignTask',async({title,description,priority,assignedTo})=>{
    try {
        const res= await axiosInstance.post('admin/assignTask',{title,description,priority,assignedTo})
        // console.log(res);
        
    } catch (error) {
        console.log(error);
        
    }
})


export const getParticulartask= createAsyncThunk('/admin/getparticularTask',async(id)=>{
    try {
        const res= await axiosInstance.get(`/admin/${id}/getParticularTask`)
        console.log(res);
        return res.data.data.task
        
    } catch (error) {
        console.log(error);
        
    }
})