import Expense from '@models/expense';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ExpensesState = {
  expenseList: Expense[];
};

const initialState: ExpensesState = {
  expenseList: [],
};

const expensesSlice = createSlice({
  name: 'expenseList',
  initialState: initialState,
  reducers: {
    add: (state, action: PayloadAction<Expense>) => {
      state.expenseList.push(action.payload);
    },
  },
});

export const expensesActions = expensesSlice.actions;

export default expensesSlice.reducer;
