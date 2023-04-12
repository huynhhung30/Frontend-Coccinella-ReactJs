import axios from "../axios";
const handleLogin = (email, password) => {
  return axios.post("/api/user/login", { email, password });
};
const getUsersList = (inputId) => {
  return axios.get(`/api/user/users-list?id=${inputId}`);
};
export { handleLogin, getUsersList };
