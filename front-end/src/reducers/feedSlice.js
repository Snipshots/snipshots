import { createSlice } from '@reduxjs/toolkit';


//handles changes of state in feed using createSlice method from Redux Toolkit
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
