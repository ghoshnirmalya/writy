import { combineReducers } from "@reduxjs/toolkit";
import { usersSlice } from "slices/users";

const rootReducer = combineReducers({
  users: usersSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
