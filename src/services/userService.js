import axios from "../axios";
const handleLogin = (email, password) => {
  return axios.post("/api/user/login", { email, password });
};
const getUsersList = (inputId, limit, page) => {
  return axios.get(
    `/api/user/users-list?id=${inputId}&limit=${limit}&page=${page}`
  );
};

const createNewUserService = (data) => {
  return axios.post(`/api/user/register`, data);
};

const editUserService = (data) => {
  return axios.put(`/api/user/update`, data);
};
const deleteUserService = (id) => {
  return axios.delete(`/api/user/delete`, {
    //   headers: {
    //     Authorization: authorizationToken,
    //   },
    // }
    data: { id: id },
  });
};
export {
  handleLogin,
  getUsersList,
  createNewUserService,
  deleteUserService,
  editUserService,
};
