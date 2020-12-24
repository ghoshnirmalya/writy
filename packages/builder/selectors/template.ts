import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { templateSlice } from "slices/template";
import { AppState } from "../store";

export const getTemplateData = () => {
  return createDraftSafeSelector(
    (state: AppState) => state,
    (state: AppState) => state?.[templateSlice.name]
  );
};

export const getSectionData = (id: number) => {
  return createDraftSafeSelector(
    (state: AppState) => state,
    (state: AppState) => state?.[templateSlice.name].template.sections[id]
  );
};
