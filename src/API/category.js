import axios from "axios";

const URL = "https://goodreadsback.herokuapp.com" || "http://localhost:3000";
export const getAllCategories = () => {
  return axios
    .get(`${URL}/api/categories`)
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
    .get(`${URL}/api/categories/:categoryId`, { id })
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
