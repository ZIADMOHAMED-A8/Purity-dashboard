import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:null,
    isAuthednticated:false
}

 const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setCredentials:(state,action)=>{
            state.user=action.payload.user
            state.isAuthednticated=true
        },
        logout:(state)=>{
            state.user=null,
            state.isAuthednticated=false
        }
    }
})
export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
