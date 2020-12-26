import { createSlice } from "@reduxjs/toolkit";
import hydrate from "lib/hydrate";
import Template from "types/template";

interface IInitialState {
  template: Template;
  loading: string;
  error: any;
  previewDeviceType: string;
}

const initialState: IInitialState = {
  template: {
    meta: {},
    sections: [],
  },
  loading: "idle",
  error: null,
  previewDeviceType: "desktop",
};

export const templateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    setTemplateData(state, action) {
      state.template = action.payload;
    },
    addTemplateSection(state, action) {
      state.template.sections.splice(
        action.payload.positionOfSection,
        0,
        action.payload.sectionContent
      );
    },
    removeTemplateSection(state, action) {
      state.template.sections.splice(action.payload.positionOfSection, 1);
    },
    updateTemplateSectionMeta(state, action) {
      state.template.sections[action.payload.positionOfSection].meta[
        action.payload.itemType
      ] = action.payload.value;
    },
    updateTemplateSectionTheme(state, action) {
      state.template.sections[action.payload.positionOfSection].theme[
        action.payload.key
      ] = action.payload.value;
    },
    addTemplateSectionData(state, action) {
      state.template.sections[action.payload.positionOfSection].data[
        action.payload.itemType
      ].push(action.payload.value);
    },
    updateTemplateSectionData(state, action) {
      state.template.sections[action.payload.positionOfSection].data[
        action.payload.itemType
      ][action.payload.itemPosition][action.payload.key] = action.payload.value;
    },
    removeTemplateSectionData(state, action) {
      state.template.sections[action.payload.positionOfSection].data[
        action.payload.itemType
      ].splice(action.payload.itemPosition, 1);
    },
    updatePreviewDeviceType(state, action) {
      state.previewDeviceType = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...state,
        ...(action.payload as any)[templateSlice.name],
      };
    });
  },
});

export const {
  setTemplateData,
  addTemplateSection,
  removeTemplateSection,
  updateTemplateSectionMeta,
  updateTemplateSectionTheme,
  addTemplateSectionData,
  updateTemplateSectionData,
  removeTemplateSectionData,
  updatePreviewDeviceType,
} = templateSlice.actions;
