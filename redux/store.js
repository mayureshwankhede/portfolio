import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./card";

export default configureStore({
  reducer: {
    card: cardReducer,
  },
});
