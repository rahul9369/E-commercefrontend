import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { NODE_API_ENDPOINT } from "../utils/utils";

export const createuser = createAsyncThunk("AuthSlice/createUser", async () => {
  const data = localStorage.getItem("token");
  console.log(data);
  console.log(data);
  try {
    const response = await fetch(`${NODE_API_ENDPOINT}/getUser`, {
      method: "POST",
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
  } catch (error) {}
});

export const userSlice = createSlice({
  name: "auth",
  initialState: {
    user: "",
  },
  reducers: {
    login(state, action) {
      console.log(action.payload);
      state.user = action.payload;
    },
    logout(state, action) {
      state.user = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createuser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createuser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        console.log(action.payload);
      })
      .addCase(createuser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to create user.";
      });
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
