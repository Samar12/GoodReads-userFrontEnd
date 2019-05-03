import axois from "axios";
const URL = "https://goodreadsback.herokuapp.com" || "http://localhost:3000";

export const getAuthors = () => {
  return axois.get(`${URL}/api/authors`, { headers: { authorization: `Bearer ${localStorage.getItem("userToken")}` } }).then(res => res.data);
};

export const getAuthorById = id => {
  return axois.get(`${URL}/api/authors/${id}`, { headers: { authorization: `Bearer ${localStorage.getItem("userToken")}` } }).then(res => {
    return res.data;
  });
};
