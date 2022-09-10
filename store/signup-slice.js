import {createSlice} from '@reduxjs/toolkit';
const signupSlice = createSlice({
  name: 'signUp',
  initialState: {isSignup: false},
  reducers: {
    show(state) {
      state.isSignup = true;
    },
    hide(state) {
      state.isSignup = false;
    },
  },
});
export const signupAction = signupSlice.actions;
export default signupSlice;
