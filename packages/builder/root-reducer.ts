import { combineReducers } from "@reduxjs/toolkit";
import { siteSlice } from "slices/site";

const rootReducer = combineReducers({
  site: siteSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
