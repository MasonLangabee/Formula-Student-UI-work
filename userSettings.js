import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colorMode: "light",
};

export const userSettingsSlice = createSlice({
  name: "userSettings",
  initialState: {
    colorMode: "dark",
  },
  reducers: {
    setColorMode: (state, action) => {
      state.colorMode = action.payload;
    },
  },
});

export const selectColorMode = (state) => state.userSettings.colorMode;
export const { setColorMode } = userSettingsSlice.actions;
export default userSettingsSlice.reducer;
