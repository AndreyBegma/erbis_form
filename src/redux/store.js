import { configureStore } from "@reduxjs/toolkit";

import mainSlice from "./slices/main"

const store = configureStore({
  reducer: {
    main: mainSlice
  }
})

export default store