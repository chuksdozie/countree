import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccount: (state, action) => {
      state.user = action.payload;
    },
    resetAccount: (state, action) => {
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAccount, resetAccount } = accountSlice.actions;

export default accountSlice.reducer;
