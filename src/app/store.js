import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/user/authSlice';
import productReducer from '../features/products/productSlice';
import blogReducer from '../features/blogs/blogSlice';
import contactReducer from '../features/contact/contactSlice';
import categoryReducer from '../features/category/categorySlice';
import brandReducer from '../features/brand/brandSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    blog: blogReducer,
    category: categoryReducer,
    brand: brandReducer,
    contact: contactReducer,
  },

});