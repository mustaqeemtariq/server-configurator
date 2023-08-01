import { configureStore } from "@reduxjs/toolkit";
import configuratorSlice from "./slices/configuratorSlice";

const store = configureStore({
  reducer: {
    [configuratorSlice.name]: configuratorSlice.reducer,
  },
  devTools: true,
});

export default store;
