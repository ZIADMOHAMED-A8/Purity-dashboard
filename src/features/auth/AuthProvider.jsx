import { useEffect } from "react";
import { supabase } from "../../../supabaseClient";
import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";

export default function AuthProvider({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (data) {
        dispatch(setCredentials(data.user));
        console.log('user',data.user)
      }
    };

    getUser();
  }, [dispatch]);

  return <>{children}</>;
}
