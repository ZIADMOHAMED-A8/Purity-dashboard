import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCredentials, setisLoading, logout } from "./authSlice";
import { getUser } from "../../utils/getUser";

export default function AuthProvider({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUser = async () => {
      dispatch(setisLoading({isLoading:true}));

      const { data } = await getUser();

      if (data?.user) {
        dispatch(setCredentials(data.user));
      } 

      dispatch(setisLoading({isLoading:false}));

    };

    checkUser();
  }, [dispatch]);

  return <>{children}</>;
}
