// import toolkit from "@reduxjs/toolkit";

import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// const { configureStore, createAction, createReducer } = toolkit; //method buatan khas sendiri konfigurasi semaunya si aku ya kan sayang
//reducer

const addToCart = createAction("ADD_TO_CART");

//memperkenalkan state
// const intialState = {
//   cart: [],
// };

const cartReducer = createReducer([], (builder) => {
  //arrow function ini menampung builder object
  builder.addCase(addToCart, (state, action) => {
    // state.cart = [...state.cart, action.payload]; //opsi pertama

    state.push(action.payload); //cara atau opsi kedua, alasan memilih karena lebih simple
  });
});
const login = createAction("CREATE_SESSION");
const loginReducer = createReducer(false, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

//store (wadah dalam redux)
const store = configureStore({
  //   reducer: cartReducer, // ini pakai satu

  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});
console.log("oncreate store : ", store.getState());

//dispatch atau action handler in redux

// cara pertama
// const action2 = addToCart({ id: 1, qty: 20 });
// store.dispatch(action2);

// cara kedua
store.dispatch(addToCart({ id: 1, qty: 20 }));
store.dispatch(addToCart({ id: 2, qty: 30 }));

//subscribe
store.subscribe(() => {
  console.log("STORE CHANGE: ", store.getState());
});
