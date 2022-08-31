import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../components/hooks/useAuth";

export const PrivateRoute = ({ permission, children, ...rest }) => {
  const { user } = useAuth();
  const location = useLocation();
  //https://www.robinwieruch.de/react-router-private-routes/
  //https://www.youtube.com/watch?v=X8eAbu1RWZ4
  //https://github.com/umair-khanzada/role-based-access-control/blob/master/src/routes/MapAllowedRoutes.js
  if (user.username === "") {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (!user?.permissions?.find((role) => permission?.includes(role))) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }
  return children;
};
