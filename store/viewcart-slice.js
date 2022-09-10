import {createSlice} from '@reduxjs/toolkit';
const viewCartSlice = createSlice({
  name: 'viewCart',
  initialState: {isCart: false},
  reducers: {
    show(state) {
      state.isCart = true;
    },
    hide(state) {
      state.isCart = false;
    },
  },
});
export const viewCartActions = viewCartSlice.actions;
export default viewCartSlice;
