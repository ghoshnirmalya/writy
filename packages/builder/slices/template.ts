import { createSlice } from "@reduxjs/toolkit";
import hydrate from "lib/hydrate";
import Template from "types/template";

interface IInitialState {
  template: Template;
  loading: string;
  error: any;
}

const initialState: IInitialState = {
  template: {
    meta: {},
    sections: [],
  },
  loading: "idle",
  error: null,
};

export const templateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    setTemplateData(state, action) {
      if (state.loading === "idle") {
        state.loading = "fulfilled";
        state.template = action.payload;
      }
    },
    updateTemplateSectionData(state, action) {
      state.template.sections[action.payload.positionOfSection].data[
        action.payload.itemType
      ][action.payload.itemPosition][action.payload.key] = action.payload.value;
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
  updateTemplateSectionData,
} = templateSlice.actions;
