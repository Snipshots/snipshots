import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
//rootReducer comes from ./reducers/index.js where reducers from feedSlice and snippetSlice were combined

//uses configure store method from redux in order to connect root reducer
const store = configureStore({
  reducer: rootReducer,
});

export default store;
