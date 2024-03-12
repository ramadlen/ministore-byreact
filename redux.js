import { legacy_createStore } from "redux";
// cara penggunanan redux management
// 1. reducer, 2. store, 3. dispatch, 4. subscribe
// reducer(kelola)
const cartReducer = (
  state = {
    cart: [{ id: 1, qty: 20 }],
  },
  action,
) => {
  switch (
    action.type //type = nama action
  ) {
    case "ADD_TO_CART": //nama fungsi
      return {
        ...state,
        cart: [...state.cart, action.payload], //payload = nama data
      };
    default: // jika tidak ada nilai typenya maka akan dikembalikan menjadi state(return state)
      return state;
  }
};

// store(tempat kumpul/wadah)
const store = legacy_createStore(cartReducer);
console.log("oncreate store : ", store.getState());

//Subscribe(melihat perubahan yang ada dalam store)
store.subscribe(() => {
  console.log("STORE CHANGE: ", store.getState());
});

//dispatch(event handler atau aksi dari pengurangan atau tambah atau dll)
const action1 = { type: "ADD_TO_CART", payload: { id: 2, qty: 3 } };
store.dispatch(action1);
const action2 = { type: "ADD_TO_CART", payload: { id: 10, qty: 7 } };
store.dispatch(action2);
