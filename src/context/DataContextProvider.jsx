import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Context = createContext();

export default function DataContextProvider({ children }) {
  const value = DataContext();
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

function DataContext() {
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(null);
  const [tokenLoading, setTokenLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getUserInfo();
  }, [token]);

  const getUserInfo = async () => {
    try {
      const { data } = await axios.get("/user/get-user-info");
      setUserData(data.user);
    } catch (error) {
      console.error(error);
    }
  };

  const refreshToken = async () => {
    try {
      const { data } = await axios.get("/user/refresh-token");
      setToken(data.newAccessToken);
    } catch (error) {
      setToken(null);
    }
  };

  useEffect(() => {
    (async () => {
      setTokenLoading(true);
      await refreshToken();
      setTokenLoading(false);
    })();
  }, []);

  console.log(userData);

  configAxios(token, refreshToken);
  return { token, setToken, tokenLoading, navigate, userData };
}

const configAxios = (token, refreshToken) => {
  console.log("config");
  axios.defaults.baseURL = import.meta.env.VITE_APP_BACKEND_URL;
  axios.defaults.headers = { "x-access-token": token };
  axios.defaults.withCredentials = true;

  let refresh = false;
  axios.interceptors.response.use(
    (res) => res,
    async (error) => {
      if (error.response.status == 401 && !refresh) {
        refresh = true;
        await refreshToken();
        if (response.status == 200) return axios(error.config);
      }
      refresh = false;

      return Promise.reject(error);
    }
  );
};
