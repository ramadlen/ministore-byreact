// import toolkit from "@reduxjs/toolkit";

import { configureStore, createSlice } from "@reduxjs/toolkit";

// const { configureStore, createSlice } = toolkit; //method buatan khas sendiri konfigurasi semaunya si aku ya kan sayang

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
console.log("oncreate store: ", store.getState());
store.subscribe(() => {
  console.log("STOPRE CHANGE : ", store.getState());
});

store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 23 }));
store.dispatch(cartSlice.actions.addToCart({ id: 10, qty: 231 }));
