import { createSlice } from '@reduxjs/toolkit';

//holds a single snippet to display on the snippet view page
const postSlice = createSlice({
  name: 'post',
  initialState: {
    title: '',
    tags: '',
    code: '',
    description: '',
  },
  reducers: {
    setPost: (state, action) => {
      console.log('payload: ', action.payload);
      const { field, value } = action.payload;
      state[field] = value;
    },
    clearPost: (state) => {
      state = {
        title: '',
        tags: '',
        code: '',
        description: '',
      };
    },
  },
});

export const { setPost, clearPost } = postSlice.actions;
//export const selectSnippet = (state) => state.snippet;
export default postSlice.reducer;
