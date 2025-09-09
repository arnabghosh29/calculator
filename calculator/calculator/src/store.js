import { configureStore } from "@reduxjs/toolkit";
import matrixReducer from "./slice";

export const store = configureStore({
    reducer: {
        matrix: matrixReducer,
    },
});
