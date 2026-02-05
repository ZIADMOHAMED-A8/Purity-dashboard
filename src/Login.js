import { useDispatch } from "react-redux"
import { supabase } from "../supabaseClient"
import { setCredentials } from "./features/auth/authSlice"


 export default async function Login(email,password){
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })
      if(error){
        console.error(error)
        return {
          error:error,
          data:undefined
        }
      }
      else{
        console.log(data)

        return {
          error:undefined,
          data:data
        }

      }
}
  