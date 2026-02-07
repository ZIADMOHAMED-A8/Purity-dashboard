import { supabase } from "../supabaseClient"


 export default async function verifyOTP(email,tokenFromUser){
    const { data, error } = await supabase.auth.verifyOtp({
        email,
        token: tokenFromUser,
        type: 'signup' 
      })
      if(error){
        console.error(error)
        return {
            error:error,
            data:null
        }
      }
      else{
        console.log(data)
        
        return {
            error:null,
            data:data
        }
      }
}
  