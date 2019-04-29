import axios from "axios";

const URL = process.env.REACT_APP_BackEnd_URL || "http://localhost:3000";

export const register = ({ name, email, password }) => {
  //   debugger;
  return axios.post(`${URL}/user/register`, { name, email, password }).then(res => res.data);
};
export const login = ({ name, password }) => {
  //   debugger;
  return axios.post(`${URL}/user/login`, { name, password }).then(res => res.data);
};
export const getProfile = () => {
  return axios.get(`${URL}/user/profile`, { headers: { authorization: `Bearer ${localStorage.getItem("userToken")}` } }).then(res => res.data);
};
export const getAllBooks = (pageNum = 1) => {
  return axios.get(`${URL}/user/all-Books/${pageNum}`, { headers: { authorization: `Bearer ${localStorage.getItem("userToken")}` } }).then(res => res.data);
};
export const getCurReadBooks = (pageNum = 1) => {
  return axios
    .get(`${URL}/user/currentlyreading-Books/${pageNum}`, { headers: { authorization: `Bearer ${localStorage.getItem("userToken")}` } })
    .then(res => res.data);
};
export const getWantToReadBooks = (pageNum = 1) => {
  return axios
    .get(`${URL}/user/wanttoread-Books/${pageNum}`, { headers: { authorization: `Bearer ${localStorage.getItem("userToken")}` } })
    .then(res => res.data);
};
export const getReadBooks = (pageNum = 1) => {
  return axios.get(`${URL}/user/read-Books/${pageNum}`, { headers: { authorization: `Bearer ${localStorage.getItem("userToken")}` } }).then(res => res.data);
};
export const editRating = ({ bookId, rate }) => {
  return axios
    .post(`${URL}/user/book/edit/${bookId}`, { rate }, { headers: { authorization: `Bearer ${localStorage.getItem("userToken")}` } })
    .then(res => res.data);
};
export const editStatus = ({ bookId, status }) => {
  return axios
    .post(`${URL}/user/book/edit/${bookId}`, { status }, { headers: { authorization: `Bearer ${localStorage.getItem("userToken")}` } })
    .then(res => res.data);
};

/////////////////////////////////////////////////////////////////////////////////////

export const getBoooks = pageNum => {
  return axios.get(`${URL}/user/books/${pageNum}`, { headers: { authorization: `Bearer ${localStorage.getItem("userToken")}` } }).then(res => res.data);
};
