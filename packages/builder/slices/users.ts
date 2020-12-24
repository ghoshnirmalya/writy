import { createSlice } from "@reduxjs/toolkit";
import handleError from "lib/handle-error";
import hydrate from "lib/hydrate";
import { fetchUsers } from "thunks/users";
import { User } from "types/user";

interface IInitialState {
  users: User[];
  loading: string;
  error: any;
}

const initialState: IInitialState = {
  users: [],
  loading: "idle",
  error: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(hydrate, (state, action) => {
        return {
          ...state,
          ...(action.payload as any)[usersSlice.name],
        };
      })
      .addCase(fetchUsers.pending, (state) => {
        state.users = [];
        state.loading = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = "loaded";
      })
      .addMatcher(handleError, (state, action) => {
        state.loading = "error";
        state.error = action.payload.error;
      });
  },
});
