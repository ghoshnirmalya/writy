import { combineReducers } from "@reduxjs/toolkit";
import { templateSlice } from "slices/template";

const rootReducer = combineReducers({
  template: templateSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
