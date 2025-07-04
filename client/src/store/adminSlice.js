import { createSlice } from "@reduxjs/toolkit"
import { adminLogin, getParticulartask, getTask, getUsers } from "./admin.thunk"

const initialState= {
    admin:null,
    tasks:[],
    users:[],
    selectedTask:null

    
}

const adminSlice= createSlice({
    name:'admin',
    initialState,
    reducers:{
        logout:(state,action)=>{
               state.admin=null,
    state.tasks=[],
    state.users=[],
    state.selectedTask=null

        }
    },
    extraReducers:(builder)=>{
        builder.addCase(adminLogin.pending,(state,action)=>{
            state.admin= null
        })
builder.addCase(adminLogin.fulfilled,(state,action)=>{
   state.admin= action.payload
   
})
builder.addCase(adminLogin.rejected,(state,action)=>{

})
   builder.addCase(getUsers.pending,(state,action)=>{
           
        })
builder.addCase(getUsers.fulfilled,(state,action)=>{
  
   state.users= action.payload
   
})
builder.addCase(getUsers.rejected,(state,action)=>{

})

   builder.addCase(getTask.pending,(state,action)=>{
           
        })
builder.addCase(getTask.fulfilled,(state,action)=>{
   console.log(action.payload)
    state.tasks= action.payload

   
})
builder.addCase(getTask.rejected,(state,action)=>{

})


   builder.addCase(getParticulartask.pending,(state,action)=>{
           
        })
builder.addCase(getParticulartask.fulfilled,(state,action)=>{
   
    
    state.selectedTask= action.payload

   
})
builder.addCase(getParticulartask.rejected,(state,action)=>{

})





    







}
})

export const {logout} = adminSlice.actions
export default adminSlice.reducer