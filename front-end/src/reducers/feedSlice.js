import { createSlice } from '@reduxjs/toolkit';

const feedSlice = createSlice({
  name: 'feed',
  initialState: {
    currComponent: 'overview',
  },
  reducers: {
    navigate: (state, action) => {
      state.currComponent = action.payload;
    },
  },
});

export const { navigate } = feedSlice.actions;
export default feedSlice.reducer;
