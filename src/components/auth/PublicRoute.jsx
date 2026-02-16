import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../utils/getUser";

export default function PublicRoute({ children }) {
  const {data,isLoading}=useQuery({
    queryKey:['getUser'],
    queryFn:getUser
  })

  if (isLoading) return <Skeleton height={22} width={120} />; 

  if (data?.data?.user) {
    {console.log(data)}
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}
