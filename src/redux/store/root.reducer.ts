import { combineReducers } from '@reduxjs/toolkit';
import homeReducer from '@slices/home.slice';
import exprensesReducer from '@slices/exprenses.slice';
import templatesReducer from '@slices/templates.slice';

const rootReducer = combineReducers({
  home: homeReducer,
  expenses: exprensesReducer,
  templates: templatesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
