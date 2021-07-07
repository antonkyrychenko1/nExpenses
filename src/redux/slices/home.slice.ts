import { createSlice } from '@reduxjs/toolkit';

type HomeState = {
  count: number;
};

const initialState: HomeState = {
  count: 0,
};

const homeSlice = createSlice({
  name: 'home',
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const homeActions = homeSlice.actions;

export default homeSlice.reducer;
