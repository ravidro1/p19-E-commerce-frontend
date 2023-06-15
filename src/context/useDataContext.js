import React, { useContext } from "react";
import { Context } from "./DataContextProvider";

export default function useDataContext() {
  return useContext(Context);
}
