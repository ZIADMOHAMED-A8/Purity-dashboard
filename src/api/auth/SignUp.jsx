import { supabase } from "../../../supabaseClient";

export default async function Signup({email, password, name}) {
    const res = await supabase.auth.signUp(
        {
            email,
            password,
            options: {
                data: {
                    first_name: name,
                },
            }
        }
    )
    return res

}