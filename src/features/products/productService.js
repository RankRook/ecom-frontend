import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const getProducts = async (data) => {
  const respone = await axios.get(`${base_url}product`);
  if (respone.data) {
    return respone.data;
  }
};

const addToWishlist = async (prodId) => {
    try {
        const response = await axios.put(
          `${base_url}product/wishlist`,
          { prodId },
          config
        );
        if (response.data) {
          return response.data;
        }
      } catch (error) {
        console.error("Error:", error);
        throw error; // Rethrow the error to handle it in the calling function
      }
};

export const productService = {
  getProducts,
  addToWishlist,
};
