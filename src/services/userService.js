import axios from "../axios";
const handleLogin = (email, password) => {
  return axios.post("/api/user/login", { email, password });
};
const getUsersList = (inputId) => {
  return axios.get(`/api/user/users-list?id=${inputId}`);
};

const createNewUserService = (data) => {
  return axios.post(`/api/user/register`, data);
};
export { handleLogin, getUsersList, createNewUserService };
