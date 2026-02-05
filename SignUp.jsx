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
        return {error:error,
            data:null
        }
    }
    else{
        console.log(data)
        return {error:null,
            data:data
        }
    }
    
}