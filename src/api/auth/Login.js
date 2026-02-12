import { useDispatch } from "react-redux"
import { supabase } from "../../../supabaseClient"
import { setCredentials } from "../../features/auth/authSlice"


 export default async function Login({email,password}){
    const req =  supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })
      return await req

}
  