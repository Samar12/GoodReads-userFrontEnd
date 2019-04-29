import axios from 'axios';

const BACKEND_URL = "http://localhost:3000"
export const  getAllBooks = ()=>{
    return axios.get(`${BACKEND_URL}/api/books/Add`)
    .then((res)=>{
    const data= res.data;
    return data;
    
})
.catch((error) => {
    // handle error
    console.log(error);
});
}