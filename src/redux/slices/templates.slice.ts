import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Template from '@models/template';

type TemplatesState = {
  list: Array<Template>;
};

const initialState: TemplatesState = {
  list: [],
};

const templatesSlice = createSlice({
  name: 'templates',
  initialState: initialState,
  reducers: {
    addTemplate: (state, action: PayloadAction<Template>) => {
      state.list.push(action.payload);
    },
  },
});

export const templatesActions = templatesSlice.actions;

export default templatesSlice.reducer;
