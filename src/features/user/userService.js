import axios from "axios"
import {base_url} from "../../utils/axiosConfig"


const getTokenFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: "application/json",
  },
};

const register = async(userData)=>{
    const response = await axios.post(`${base_url}user/register`,userData)
    if(response.data){
        localStorage.setItem("customer", JSON.stringify(response.data));
    }
}

const login = async(userData) =>{
    const response = await axios.post(`${base_url}user/login`, userData, config)
    if (response.data) {
        localStorage.setItem("customer", JSON.stringify(response.data));
      }
      return response.data;
}

const getUserWishList = async () =>{
    const response = await axios.get(`${base_url}user/wishlist`, config);
    if(response.data){
        return response.data;
    }
}

export const authService ={
    register,
    login,
    getUserWishList
}