import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../utils/getUser";

export default function ProtectedRoute({ children }) {
  const{data,isLoading}=useQuery({
    queryKey:['getUser'],
    queryFn:getUser
  })

  if (isLoading) return <Skeleton height={22} width={120} />; 

  if (!data?.data?.user) {
    return <Navigate to="/sign in" replace />;
  }

  return <>{children}</>;
}
