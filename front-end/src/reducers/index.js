import { combineReducers } from '@reduxjs/toolkit';
import feedReducer from './feedSlice';
import snippetReducer from './snippetSlice';
import postReducer from './postSlice';

const rootReducer = combineReducers({
  feed: feedReducer,
  snippet: snippetReducer,
  post: postReducer,
});

export default rootReducer;
