import { combineReducers } from '@reduxjs/toolkit';
import feedReducer from './feedSlice';
import snippetReducer from './snippetSlice';

const rootReducer = combineReducers({
  feed: feedReducer,
  snippet: snippetReducer,
});

export default rootReducer;
