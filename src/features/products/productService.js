import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const getProducts = async (data) => {
  console.log(data);
  const respone = await axios.get(
    `${base_url}product?${data?.brands ? `brands=${data?.brands}&&` : ""}${
      data?.tag ? `tags=${data?.tag}&&` : ""
    }${data?.category ? `category=${data?.category}&&` : ""}${
      data?.minPrice ? `price[gte]=${data?.minPrice}&&` : ""
    }${data?.maxPrice ? `price[lte]=${data?.maxPrice}&&` : ""}${
      data?.sort ? `sort=${data?.sort}&&` : ""
    }`
  );
  if (respone.data) {
    return respone.data;
  }
};

const getProduct = async (id) => {
  const respone = await axios.get(`${base_url}product/${id}`);
  if (respone.data) {
    return respone.data;
  }
};

const addToWishlist = async (prodId) => {
  const response = await axios.put(
    `${base_url}product/wishlist`,
    { prodId },
    config
  );
  if (response.data) {
    return response.data;
  }
};

const rateProduct = async (data) => {
  const response = await axios.put(`${base_url}product/rating`, data, config);
  if (response.data) {
    return response.data;
  }
};

export const productService = {
  getProducts,
  getProduct,
  addToWishlist,
  rateProduct,
};
