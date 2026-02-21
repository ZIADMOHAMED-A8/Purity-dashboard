import { supabase } from "../../../supabaseClient"


 export default async function Login({email,password}){
    const req =  supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })
      return await req

}
  
