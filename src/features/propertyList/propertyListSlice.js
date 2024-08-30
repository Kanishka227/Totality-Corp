import { createSlice } from "@reduxjs/toolkit";
import propertyData from "../../data/productList.json";

const initialState = {
  propertyList: propertyData,
};

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    sort: (state, action) => {
      const sortedList = [...state.propertyList].sort((a, b) => {
        switch (action.payload) {
          case "price":
            return a.price - b.price;
          case "location":
            return a.location.city.localeCompare(b.location.city);
          case "bedrooms":
            return a.bedrooms - b.bedrooms;
          default:
            return 0;
        }
      });
      state.propertyList = sortedList;
    },
  },
});

export const {sort} = propertySlice.actions
export const selectPropertyList = (state) => state.property.propertyList;

export default propertySlice.reducer;
