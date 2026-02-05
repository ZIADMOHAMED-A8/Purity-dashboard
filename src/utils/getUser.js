import { useDispatch } from "react-redux";
import { supabase } from "../../supabaseClient";


export const getUser = async () => {
    
    const { data, error } = await supabase.auth.getUser();
    return {
        data:data,
        error:error
      }

  };