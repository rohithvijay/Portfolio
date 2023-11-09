import { createSlice } from "@reduxjs/toolkit";
import {EN, FR } from "./../data/languagedata";

const configSlice = createSlice({
  name: "config",
  initialState: {
    language: "FR",
    languageData: EN
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
      state.languageData = action.payload === 'FR' ? EN : FR;
    },
  },
});

export const { changeLanguage } = configSlice.actions;

export default configSlice.reducer;
