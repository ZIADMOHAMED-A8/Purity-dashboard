import { supabase } from "../../supabaseClient"
import { queryClient } from "../main"
export default async function logout(){
const { error } = await supabase.auth.signOut()

if (error) {
  console.error('Logout error:', error.message)
} else {
  queryClient.setQueryData(['getUser'],null)
  window.location.href = '/sign in' 
}

}