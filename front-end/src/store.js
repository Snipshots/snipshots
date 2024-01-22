import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducers';

//uses configure store method from redux in order to connect root reducer 
const store = configureStore({
  reducer: rootReducer
})

export default store;