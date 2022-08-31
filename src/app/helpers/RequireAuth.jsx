import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../components/hooks/useAuth";

const RequireAuth = ({ permission }) => {
  const { user } = useAuth();
  const location = useLocation();

  console.log("user");
  return user?.permissions?.find((role) => permission?.includes(role)) ? (
    <Outlet />
  ) : user?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
