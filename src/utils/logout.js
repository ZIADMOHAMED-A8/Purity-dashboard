import { supabase } from "../../supabaseClient"

export default async function logout(){
const { error } = await supabase.auth.signOut()

if (error) {
  console.error('Logout error:', error.message)
} else {
  console.log('User logged out successfully!')
  // Redirect the user to a public page, e.g., login or homepage
  window.location.href = '/login' 
}

}