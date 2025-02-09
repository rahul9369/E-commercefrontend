import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { NODE_API_ENDPOINT } from "../utils/utils";

export const createusers = createAsyncThunk(
  "AuthSlice/createUsers",
  async () => {
    const data = localStorage.getItem("token");
    console.log(data);
    console.log(data);
    try {
      const response = await fetch(`${NODE_API_ENDPOINT}/user/cart`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${data}`,
        },
      });
      console.log(response);
      if (!response.ok) {
        console.log("getting error");
        return "";
      }
      const restD = await response.json();
      console.log(restD);
      return restD;
    } catch (error) {
      console.error(error);
    }
  }
);

export const userSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addcart(state, action) {
      console.log(action.payload);

      state?.cart?.push({ ...action.payload });
    },
    clearCart(state, action) {
      state.cart = [];
    },
    remove(state, action) {
      //console.log(action.payload);
      const RemoveItem = state?.cart?.filter(
        (item) => item._id !== action.payload
      );
      console.log(RemoveItem);
      state.cart = RemoveItem;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createusers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createusers.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
        console.log(action.payload);
      })
      .addCase(createusers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to create user.";
        console.log(action.payload);
      });
  },
});

export const { addcart, remove, clearCart } = userSlice.actions;

export default userSlice.reducer;
