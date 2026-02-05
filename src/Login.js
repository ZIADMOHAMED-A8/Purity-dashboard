import { supabase } from "../supabaseClient"


 export default async function Login(email,password){
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })
      if(error){
        console.error(error)
        return error
      }
      else{
        console.log(data)
        return data

      }
}
  