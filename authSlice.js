import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    someToken: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.someToken = action.payload;
    },
    removeToken: (state, action) => {
      state.someToken = null;
    },
  },
});

export const selectToken = (state) => state.auth.someToken;

export const { setToken, removeToken } = authSlice.actions;
export default authSlice.reducer;
