import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartInfo:[],
  cartTotalSum: 0,
  cartNumber: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action) => {

      const {id,name,price,city} = action.payload

      const existingProduct = state.cartInfo.find(cartItem => cartItem.id === id)

      if(!existingProduct){
      const createOrder = {
        id,
        name,
        city,
        price
      }
      state.cartInfo.push(createOrder)
      state.cartTotalSum += price
      state.cartNumber += 1
    }
    },
    removeFromCart: (state,action) => {
      const {id,price} = action.payload
      const modifiedList = state.cartInfo.filter(cart => cart.id !== id)
      state.cartInfo = modifiedList
      state.cartTotalSum -= price
      state.cartNumber -= 1;
    } ,
    reset: (state)=>{
      state.cartInfo = []
      state.cartTotalSum = 0
      state.cartNumber = 0
    }
  }
})

export const {addToCart,removeFromCart,reset} = cartSlice.actions

export const selectCartInfo = state => state.cart.cartInfo
export const selectTotalSum = state => state.cart.cartTotalSum
export const selectCartNumber = state => state.cart.cartNumber

export default cartSlice.reducer
