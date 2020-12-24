import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { usersSlice } from "slices/users";
import { AppState } from "../store";

export const selectUsers = () =>
  createDraftSafeSelector(
    (state: AppState) => state,
    (state: AppState) => state?.[usersSlice.name]
  );
