import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isAuthednticated, isLoading } = useSelector(
    (state) => state.auth
  );

  if (isLoading) return <p>loading</p>; 

  if (!isAuthednticated) {
    return <Navigate to="/sign-in" replace />;
  }

  return <>{children}</>;
}
