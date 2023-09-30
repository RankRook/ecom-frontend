import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "./productService";

export const getAllProducts = createAsyncThunk(
  "product/all-products",
  async (thunkAPI) => {
    try{
        return await productService.getProducts()
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addToWishlist = createAsyncThunk(
    "product/wishlist",
    async (prodId, thunkAPI) => {
      try{
          return await productService.addToWishlist(prodId)
      }catch(error){
          return thunkAPI.rejectWithValue(error);
      }
    }
  );

const initialState = {
    product:"",
    isError: false,
    isTrue: false,
    isSuccess: false,
    isLoading: false,
    message:"",
}

export const productSlice = createSlice({
    name:"product",
    initialState: initialState,
    reducers:{},
    extraReducers:(builer)=>{
        builer
        .addCase(getAllProducts.pending,(state)=>{
            state.isLoading = true;
        }).addCase(getAllProducts.fulfilled,(state, action)=>{
            state.isLoading = false;
            state.isTrue = true;
            state.isError = false;
            state.product = action.payload;
        }).addCase(getAllProducts.rejected,(state, action)=>{
            state.isLoading = false;
            state.isTrue = false;
            state.isError = true
        }).addCase(addToWishlist.pending,(state)=>{
            state.isLoading = true;
        }).addCase(addToWishlist.fulfilled,(state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.addToWish = action.payload;
        }).addCase(addToWishlist.rejected,(state, action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true
        })
    }
})

export default productSlice.reducer