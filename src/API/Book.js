import axios from "axios";

const URL = process.env.REACT_APP_BackEnd_URL || "http://localhost:3000";

export const getBooks = () => {
  return axios.get(`${URL}/api/books`, { headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` } }).then(res => {
    // console.log(res.data);
    return res.data;
  });
};

export const getBooksById = id => {
  return axios.get(`${URL}/api/books/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` } }).then(res => {
    return res.data;
  });
};

export const bookSearch = name => {
  return axios.post(`${URL}/api/books/search`, { name }, { headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` } }).then(res => res.data);
};
