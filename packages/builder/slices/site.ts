import { createSlice } from "@reduxjs/toolkit";
import hydrate from "lib/hydrate";
import Site from "types/site";

interface IInitialState {
  site: Site;
  previewDeviceType: string;
  currentPage: number;
}

const initialState: IInitialState = {
  site: {
    meta: {},
    pages: [],
    theme: {},
  },
  previewDeviceType: "desktop",
  currentPage: 0,
};

export const siteSlice = createSlice({
  name: "site",
  initialState,
  reducers: {
    setSiteData(state, action) {
      state.site = action.payload;
    },
    addPage(state, action) {
      state.site.pages.push(action.payload);
    },
    removePage(state, action) {
      state.site.pages.splice(action.payload, 1);
    },
    setCurrentPageId(state, action) {
      state.currentPage = action.payload;
    },
    updatePageMeta(state, action) {
      state.site.pages[action.payload.pageId].meta[action.payload.key] =
        action.payload.value;
    },
    setTemplateData(state, action) {
      state.site.pages[action.payload.currentPageId].template =
        action.payload.templateData;
    },
    addTemplateSection(state, action) {
      state.site.pages[action.payload.currentPageId].template.sections.splice(
        action.payload.positionOfSection,
        0,
        action.payload.sectionContent
      );
    },
    removeTemplateSection(state, action) {
      state.site.pages[action.payload.currentPageId].template.sections.splice(
        action.payload.positionOfSection,
        1
      );
    },
    updateTemplateSectionMeta(state, action) {
      state.site.pages[action.payload.currentPageId].template.sections[
        action.payload.positionOfSection
      ].meta[action.payload.itemType] = action.payload.value;
    },
    updateTemplateSectionTheme(state, action) {
      state.site.pages[action.payload.currentPageId].template.sections[
        action.payload.positionOfSection
      ].theme[action.payload.key] = action.payload.value;
    },
    addTemplateSectionData(state, action) {
      state.site.pages[action.payload.currentPageId].template.sections[
        action.payload.positionOfSection
      ].data[action.payload.itemType].push(action.payload.value);
    },
    updateTemplateSectionData(state, action) {
      state.site.pages[action.payload.currentPageId].template.sections[
        action.payload.positionOfSection
      ].data[action.payload.itemType][action.payload.itemPosition][
        action.payload.key
      ] = action.payload.value;
    },
    removeTemplateSectionData(state, action) {
      state.site.pages[action.payload.currentPageId].template.sections[
        action.payload.positionOfSection
      ].data[action.payload.itemType].splice(action.payload.itemPosition, 1);
    },
    updatePreviewDeviceType(state, action) {
      state.previewDeviceType = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...state,
        ...(action.payload as any)[siteSlice.name],
      };
    });
  },
});

export const {
  setSiteData,
  addPage,
  removePage,
  setCurrentPageId,
  updatePageMeta,
  setTemplateData,
  addTemplateSection,
  removeTemplateSection,
  updateTemplateSectionMeta,
  updateTemplateSectionTheme,
  addTemplateSectionData,
  updateTemplateSectionData,
  removeTemplateSectionData,
  updatePreviewDeviceType,
} = siteSlice.actions;
