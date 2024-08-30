import { configureStore } from "@reduxjs/toolkit";
import propertyListReducer from "../features/propertyList/propertyListSlice";
import cartSliceReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    property: propertyListReducer,
    cart: cartSliceReducer
  }
})