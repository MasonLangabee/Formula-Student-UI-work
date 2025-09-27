import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  area: "plm",
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setSelectedTab: (state, action) => {
      state.setSelectedTab = action.payload;
    },
  },
});

export const { setSelectedTab } = navigationSlice.actions;
export default navigationSlice.reducer;
