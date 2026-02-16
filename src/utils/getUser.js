import { useDispatch } from "react-redux";
import { supabase } from "../../supabaseClient";


export const getUser = async () => {
    
    const res = await supabase.auth.getUser();
    return res

  };