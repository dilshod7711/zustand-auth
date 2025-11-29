import React from "react";
import useAuthStore from "../../store/authStore";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRequest = () => {
  const { isAuth } = useAuthStore();

  if (!isAuth) return <Navigate to="/" />;
  return <Outlet />;
};

export default PrivateRequest;
