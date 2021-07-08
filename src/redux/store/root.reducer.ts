import { combineReducers } from '@reduxjs/toolkit';
import homeReducer from '@slices/home.slice';
import exprensesReducer from '@slices/exprenses.slice';

const rootReducer = combineReducers({
  home: homeReducer,
  expenses: exprensesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
