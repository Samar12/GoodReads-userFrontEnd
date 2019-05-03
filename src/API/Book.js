import axios from "axios";

const URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3000";

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

export const getAllBooks = () => {
  return axios
    .get(`${URL}/api/books/Add`)
    .then(res => {
      const data = res.data;
      return data;
    })
    .catch(error => {
      // handle error
      console.log(error);
    });
};
