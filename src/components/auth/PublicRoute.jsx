import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
  const { isAuthednticated, isLoading } = useSelector(
    (state) => state.auth
  );

  if (isLoading) return <p>loading</p>; 

  if (isAuthednticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}
