import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials, setisLoading} from "./authSlice";
import { getUser } from "../../utils/getUser";
import { getUsers } from "../../api/auth/getAllUsers";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";


export default function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const {data,isLoading}=useQuery({
    queryKey:['getUser'],
    queryFn:getUser
  })

  // useEffect(() => {
  //   const checkUser = async () => {

  //     const { data } = await getUser();
  //     console.log(data.user)
  //     if (data?.user) {
  //       dispatch(setCredentials(data));
  //     } 

  //     dispatch(setisLoading({isLoading:false}));

  //   };

  //   checkUser();
  // }, [dispatch]);

  if(isLoading ){
    return <><Skeleton height={24} width={160} /></>;
  }
  else{
    {console.log(data?.data?.user?.user_metadata)}
    
    return <>{children}</>;
  }
}
