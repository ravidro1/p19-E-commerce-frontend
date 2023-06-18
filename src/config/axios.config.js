import axios from "axios";
// import { accessToken } from "../context/DataContextProvider";


// console.log(accessToken);
// axios.defaults.headers = { "x-access-token": accessToken };

// const axiosInstance = (accessToken) => {
//   return axios.create({
//     baseURL: import.meta.env.VITE_APP_BACKEND_URL,
//     headers: { "x-access-token": accessToken },
//   });
// };

// export default axiosInstance

// axios.defaults.withCredentials = true;

// let refresh = false;

// axios.interceptors.response.use(
//   (res) => res,
//   async (error) => {
//     if (error.response.status == 401 && !refresh) {
//       refresh = true;
//       const response = await axios.post("/api/user/refresh-token");

//       if (response.status == 200) return axios(error.config);
//     }
//     refresh = false;

//     return Promise.reject(error);
//   }
// );
