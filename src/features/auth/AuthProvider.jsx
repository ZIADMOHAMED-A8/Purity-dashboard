import { useEffect } from "react";
import { supabase } from "../../../supabaseClient";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials, setisLoading } from "./authSlice";
import { getUser } from "../../utils/getUser";

export  const getIfUser=getUser

export default  function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const isLoading=useSelector((state)=>state.auth.isLoading)
  useEffect(() => {
    async function getifUser (params) {
      dispatch(setisLoading({isLoading:true}))
      const {data,error}=await getUser()
      dispatch(setisLoading({isLoading:false}))

      if (data) {
        dispatch(setCredentials(data.user));
        console.log('user',data.user)
      }
    }
    getifUser()
    
  }, [dispatch]);

  if(isLoading){
    return(
      <p>loading</p>
    )
  }
  else{
    return (
      <>
      {children}
      </>
    )
  }
}