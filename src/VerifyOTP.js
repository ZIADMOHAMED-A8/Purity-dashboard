import { supabase } from "../supabaseClient"


 export default async function verifyOTP(tokenFromUser){
    const { data, error } = await supabase.auth.verifyOtp({
        email: sessionStorage.getItem('email'),
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
        sessionStorage.removeItem('email')
        return {
            error:null,
            data:data
        }
      }
}
  