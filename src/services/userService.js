import axios from "../axios";
const handleLogin = (email, password) => {
  return axios.post("/api/user/login", { email, password });
};
export { handleLogin };
