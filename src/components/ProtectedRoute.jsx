import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useDataContext from "../context/useDataContext";

export default function ProtectedRoute() {
  const { token, tokenLoading } = useDataContext();
  console.log(tokenLoading);

  if (tokenLoading) return <></>;
  return token ? <Outlet /> : <Navigate to={"/login"} />;
}
