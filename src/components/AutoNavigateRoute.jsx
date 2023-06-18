import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useDataContext from "../context/useDataContext";

export default function AutoNavigateRoute() {
  const { token, tokenLoading } = useDataContext();
  if (tokenLoading) return <></>;

  return token ? <Navigate to={"/"} /> : <Outlet />;
}
