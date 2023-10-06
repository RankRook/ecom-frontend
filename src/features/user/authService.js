import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const register = async (userData) => {
  const response = await axios.post(`${base_url}user/register`, userData);
  if (response.data) {
    localStorage.setItem("customer", JSON.stringify(response.data));
  }
};

const login = async (userData) => {
  const response = await axios.post(`${base_url}user/login`, userData, config);
  if (response.data) {
    localStorage.setItem("customer", JSON.stringify(response.data));
  }
  return response.data;
};

const getUserWishList = async () => {
  const response = await axios.get(`${base_url}user/wishlist`, config);
  if (response.data) {
    return response.data;
  }
};

const addToCart = async (cartData) => {
  const response = await axios.post(`${base_url}user/cart`, cartData, config);
  if (response.data) {
    return response.data;
  }
};

const getCart = async () => {
  const response = await axios.get(`${base_url}user/cart`, config);
  if (response.data) {
    return response.data;
  }
};

const removeCart = async (cartItemId) => {
  const response = await axios.delete(
    `${base_url}user/delete-product-cart/${cartItemId}`,
    config
  );
  if (response.data) {
    return response.data;
  }
};

const updateProdFromCart = async (cartDetail) => {
  const response = await axios.delete(
    `${base_url}user/update-product-cart/${cartDetail.cartItemId}/${cartDetail.quantity}`,
    config
  );
  if (response.data) {
    return response.data;
  }
};

const createOrder = async(orderDetail)=>{
  const response= await axios.post(`${base_url}user/cart/create-order`, orderDetail,config)
  if(response.data){
    return response.data
  }
}

export const getConfig = async () => {
  const res = await axios.get(`${base_url}user/checkout/config`)
  return res.data
}

export const authService = {
  register,
  login,
  getUserWishList,
  addToCart,
  getCart,
  removeCart,
  createOrder,
  updateProdFromCart,
};
