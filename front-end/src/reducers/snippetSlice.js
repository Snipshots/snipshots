import { createSlice } from '@reduxjs/toolkit';

//holds a single snippet to display on the snippet view page
const snippetSlice = createSlice({
  name: 'snippet',
  initialState: null,
  reducers: {
    setSnippet: (state, action) => {
        return action.payload;
      },
    clearSnippet: (state) => {
        return null;
      },
  },
});


export const { setSnippet, clearSnippet } = snippetSlice.actions;
export const selectSnippet = (state) => state.snippet;
export default snippetSlice.reducer;
