import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { templateSlice } from "slices/template";
import { AppState } from "../store";

export const getAsyncStateData = () => {
  return createDraftSafeSelector(
    (state: AppState) => state,
    (state: AppState) => state?.[templateSlice.name]
  );
};

export const getTemplateData = () => {
  return createDraftSafeSelector(
    (state: AppState) => state,
    (state: AppState) => state?.[templateSlice.name].template
  );
};

export const getSectionData = (id: number) => {
  return createDraftSafeSelector(
    (state: AppState) => state,
    (state: AppState) => state?.[templateSlice.name].template.sections[id]
  );
};

export const getPreviewDeviceTypeData = () => {
  return createDraftSafeSelector(
    (state: AppState) => state,
    (state: AppState) => state?.[templateSlice.name].previewDeviceType
  );
};
