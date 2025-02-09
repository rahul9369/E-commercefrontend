import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./features/CartSlice";
import AuthSlice from "./features/AuthSlice";

export default configureStore({
  reducer: { cart: CartSlice, auth: AuthSlice },
});
