import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default function PublicRoute({ children }) {
  const { isAuthednticated, isLoading } = useSelector(
    (state) => state.auth
  );

  if (isLoading) return <Skeleton height={22} width={120} />; 

  if (isAuthednticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}
