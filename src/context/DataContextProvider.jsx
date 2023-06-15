import React, { createContext } from "react";

export const Context = createContext();

export default function DataContextProvider({ children }) {
  const value = DataContext();
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

function DataContext() {
  return {};
}
