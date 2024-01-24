import { combineReducers } from '@reduxjs/toolkit';
import feedReducer from './feedSlice';
import snippetReducer from './snippetSlice';
import postReducer from './postSlice';
import overviewReducer from './overviewSlice';
import modeReducer from './modeSlice';

const rootReducer = combineReducers({
  feed: feedReducer,
  snippet: snippetReducer,
  post: postReducer,
  overview: overviewReducer,
  mode: modeReducer,
});

export default rootReducer;
