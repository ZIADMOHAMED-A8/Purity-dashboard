import { supabase } from "../../supabaseClient"

export default async function logout(){
const { error } = await supabase.auth.signOut()

if (error) {
  console.error('Logout error:', error.message)
} else {
  window.location.href = '/sign in' 
}

}