import axios from "axios";

const BACKEND_URL = REACT_APP_BACKEND_URL || "http://localhost:3000";
export const getAllCategories = () => {
  return axios
    .get(`${BACKEND_URL}/api/categories`)
    .then(res => {
      const data = res.data;
      return data;
      console.log(data);
    })
    .catch(error => {
      // handle error
      console.log(error);
    });
};

export const getByCatId = id => {
  return axios
    .get(`${BACKEND_URL}/api/categories/:categoryId`, { id })
    .then(res => {
      const data = res.data;
      const id = data._id;
      return data;
    })
    .catch(error => {
      // handle error
      console.log(error);
    });
};
// export default getAllCategories;
