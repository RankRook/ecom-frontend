import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "./productService";
import { toast } from "react-toastify";

export const getAllProducts = createAsyncThunk(
  "product/all-products",
  async (data, thunkAPI) => {
    try {
      return await productService.getProducts(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getProduct = createAsyncThunk(
  "product/product",
  async (id, thunkAPI) => {
    try {
      return await productService.getProduct(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addToWishlist = createAsyncThunk(
  "product/wishlist",
  async (prodId, thunkAPI) => {
    try {
      return await productService.addToWishlist(prodId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeFromWishlist = createAsyncThunk(
  "product/remove-wishlist",
  async (prodId, thunkAPI) => {
    try {
      return await productService.addToWishlist(prodId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addRating = createAsyncThunk(
  "product/rating",
  async (data, thunkAPI) => {
    try {
      return await productService.rateProduct(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  product: "",
  isError: false,
  isTrue: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builer) => {
    builer
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isTrue = true;
        state.isError = false;
        state.product = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isTrue = false;
        state.isError = true;
      })

      .addCase(addToWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.addToWish = action.payload;
        if (state.isSuccess === true) {
          toast.info("Add to Wishlist Successfully");
        }
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        if (state.isSuccess === true) {
          toast.info("Something Error");
        }
      })
      .addCase(removeFromWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeFromWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.removeToWish = action.payload;
        if (state.isSuccess === true) {
          toast.info("Remove from Wishlist Successfully");
        }
      })
      .addCase(removeFromWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        if (state.isSuccess === true) {
          toast.info("Something Error");
        }
      })
      
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.singleproduct = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      }).addCase(addRating.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addRating.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.rating = action.payload;
        if (state.isSuccess === true) {
          toast.info("Rating Successfully");
        }
      })
      .addCase(addRating.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      });
  },
  
});

export default productSlice.reducer;
