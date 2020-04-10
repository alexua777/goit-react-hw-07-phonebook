// import { createStore} from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./phonebook/phoneReducer";
// import logger from 'redux-logger'

const defaultMiddleware = getDefaultMiddleware();
const md1 = (store) => (next) => (action) => {
  console.log("Hello from md1");
  next(action);
};

const store = configureStore({
  reducer: {
    contacts: rootReducer.contacts,
    filter: rootReducer.filter,
    error: rootReducer.error,
  },
  middleware: [...defaultMiddleware],
});
export default store;
