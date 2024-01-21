import { combineReducers } from '@reduxjs/toolkit';
import feedReducer from './feedSlice';

const rootReducer = combineReducers({
  feed: feedReducer,
});

export default rootReducer;
