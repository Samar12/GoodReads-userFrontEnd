import axios from "axios";

const URL = process.env.REACT_APP_BackEnd_URL || "http://localhost:3000";

export const register = ({ name, email, password }) => {
  //   debugger;
  return axios.post(`${URL}/users/register`, { name, email, password }).then(res => res.data);
};
export const login = ({ name, password }) => {
  //   debugger;
  return axios.post(`${URL}/user/login`, { name, password }).then(res => res.data);
};
export const getProfile = () => {
  return axios.get(`${URL}/user/profile`, { headers: { authorization: `Bearer ${localStorage.getItem("userToken")}` } }).then(res => res.data);
};
