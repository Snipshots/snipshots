import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//importing createasyncthunk here from the redux toolkit so that we can fetch data from /all in async manner

export const fetchAllSnippets = createAsyncThunk(
  'overview/fetchAllSnippets',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/all');
      const data = await response.json();
      return data.reverse();
    } catch (error) {
      //using rejectwithvalue from redux toolkit here to handle async errors as recommended by toolkit
      return rejectWithValue(error.message);
    }
  }
);

//holds a single snippet to display on the snippet view page
const overviewSlice = createSlice({
  name: 'overview',
  initialState: {
    overviewSnippets: [],
  },
  reducers: {},
  //we need to put our reducer definition inside of extrareducers in order to handle the async operations above more efficiently
  //we use builder and .addcase from redux toolkit to define how state should be updated in a readable format
  extraReducers: (builder) => {
    builder.addCase(fetchAllSnippets.fulfilled, (state, action) => {
      state.overviewSnippets = action.payload;
    });
  },
});

export default overviewSlice.reducer;
