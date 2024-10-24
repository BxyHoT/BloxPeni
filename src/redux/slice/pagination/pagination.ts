import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    offset: 0,
  },
  reducers: {
    setOffset: (state, action: PayloadAction<number>) => {
      state.offset = action.payload;
    },
  },
});

export const { setOffset } = paginationSlice.actions;
export default paginationSlice.reducer;
