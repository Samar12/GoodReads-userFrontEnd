import axios from "axios";

const URL = process.env.REACT_APP_BackEnd_URL || "http://localhost:3000";

export const getAuthors = () => {
  return axios.get (`${URL}/api/authors`, {headers:
  { authorization:`Bearer ${localStorage.getItem("userToken")}`}})
  .then(res => res.data);
};

export const getAuthorsById = id => {
  return axios.get(`${URL}/api/authors/${id}`,
  { headers:{ authorization:`Bearer ${localStorage.getItem("userToken")}`}})
  .then(res => {return res.data ; });
};