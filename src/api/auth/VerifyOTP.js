import { supabase } from "../../../supabaseClient"


 export default async function verifyOTP({email,otp}){
    const res= await supabase.auth.verifyOtp({
        email,
        token: otp,
        type: 'signup' 
      })
      return res
  
}
  