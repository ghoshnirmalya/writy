import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { siteSlice } from "slices/site";
import { AppState } from "../store";

export const getSiteData = () => {
  return createDraftSafeSelector(
    (state: AppState) => state,
    (state: AppState) => state?.[siteSlice.name].site
  );
};

export const getCurrentPageData = () => {
  return createDraftSafeSelector(
    (state: AppState) => state,
    (state: AppState) => state?.[siteSlice.name].currentPage
  );
};

export const getTemplateData = (pageId: number) => {
  return createDraftSafeSelector(
    (state: AppState) => state,
    (state: AppState) => state?.[siteSlice.name].site.pages[pageId]?.template
  );
};

export const getSectionData = (pageId: number, sectionId: number) => {
  return createDraftSafeSelector(
    (state: AppState) => state,
    (state: AppState) =>
      state?.[siteSlice.name].site.pages[pageId].template.sections[sectionId]
  );
};

export const getPreviewDeviceTypeData = () => {
  return createDraftSafeSelector(
    (state: AppState) => state,
    (state: AppState) => state?.[siteSlice.name].previewDeviceType
  );
};
