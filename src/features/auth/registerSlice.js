import { createSlice } from "@reduxjs/toolkit";

const initialState={
    // email:null
    email:'ds'
}


const registerSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        addEmail:(state,action)=>{
            state.email=action.payload.email
        },
        removeEmail:(state)=>{
            state.email=null
        }
    }
})

export const {addEmail,removeEmail}=registerSlice.actions
export default registerSlice.reducer