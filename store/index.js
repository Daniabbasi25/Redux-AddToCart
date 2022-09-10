import {configureStore, createSlice} from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import cartSlice from './cart-slice';
import signupSlice from './signup-slice';
import viewCartSlice from './viewcart-slice';
const counterSlise = createSlice({
  name: 'counter',
  initialState: {counter: 0},
  reducers: {
    increment(state, action) {
      state.counter += 1;
    },
    decremet(state, action) {
      state.counter -= 1;
    },
    add(state, action) {
      state.counter += action.payload;
    },
  },
});
export const actions = counterSlise.actions;
const store = configureStore({
  reducer: counterSlise.reducer,
  // reducer: authSlice.reducer,
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    viewCart: viewCartSlice.reducer,
    signUp: signupSlice.reducer,
  },
});
export default store;
