import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:null,
    isAuthednticated:false,
    isLoading:true
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
        },
        setisLoading(state,action){
            state.isLoading=action.payload.isLoading
        }
    }
})
export const { setCredentials, logout,setisLoading } = authSlice.actions;
export default authSlice.reducer;
