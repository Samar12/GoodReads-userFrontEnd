import axois from "axios";
const URL = process.env.REACT_APP_BackEnd_URL || "http://localhost:3000";

export const getAuthors = () => {
  return axois.get(`${URL}/api/authors`, { headers: { authorization: `Bearer ${localStorage.getItem("userToken")}` } }).then(res => res.data);
};

export const getAuthorById = id => {
  return axois.get(`${URL}/api/authors/${id}`, { headers: { authorization: `Bearer ${localStorage.getItem("userToken")}` } }).then(res => {
    return res.data;
  });
};
