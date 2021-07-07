import { combineReducers } from '@reduxjs/toolkit';
import homeReducer from '@slices/home.slice';

const rootReducer = combineReducers({
  home: homeReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
