import { supabase } from "../../../supabaseClient";
export async function getUsers() {
    const prom = supabase.auth.admin.listUsers({
        page: 1,
        perPage: 1000
    });
    return await prom
}
