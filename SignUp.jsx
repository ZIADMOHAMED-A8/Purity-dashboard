import { supabase } from "./supabaseClient";

export default async function Signup(email,password) {
    const{data,error}=await supabase.auth.signUp(
        {
            email,
            password
        }
    )
    if(error){
        console.error(error)
    }
    else{
        console.log(data)
    }
    
}