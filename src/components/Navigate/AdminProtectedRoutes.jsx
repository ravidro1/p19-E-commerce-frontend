import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useDataContext from "../../context/useDataContext";

export default function AdminProtectedRoutes() {
  const { token, tokenLoading, userData, userDataLoading } = useDataContext();

  if (tokenLoading || userDataLoading) return <></>;
  return token && userData?.isAdmin ? <Outlet /> : <Navigate to={"/"} />;
}
