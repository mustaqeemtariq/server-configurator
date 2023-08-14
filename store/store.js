import { configureStore } from "@reduxjs/toolkit";
import configuratorSlice from "./slices/configuratorSlice";

const store = configureStore({
  reducer: {
    [configuratorSlice.name]: configuratorSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false, // Disable serializable check
  }),
  devTools: true,
});

export default store;
