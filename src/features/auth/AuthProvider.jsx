import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials, setisLoading, logout } from "./authSlice";
import { getUser } from "../../utils/getUser";
import { getUsers } from "../../api/auth/getAllUsers";
import { useQuery } from "@tanstack/react-query";


export default function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const isLoading=useSelector(state =>state.auth.isLoading)
  const {data,error}=useQuery({
    queryKey:['Users'],
    queryFn:getUsers
})
console.log(data)

  useEffect(() => {
    const checkUser = async () => {

      const { data } = await getUser();
      console.log(data.user)
      if (data?.user) {
        dispatch(setCredentials(data));
      } 

      dispatch(setisLoading({isLoading:false}));

    };

    checkUser();
  }, [dispatch]);

  if(isLoading){
    return <><p>Loading</p></>;
  }
  else{
    return <>{children}</>;
  }
}
