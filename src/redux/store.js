import { configureStore } from "@reduxjs/toolkit";
import markDownReducer from "./markDownSlice";

export const store = configureStore({
    reducer: {
        markdown: markDownReducer   
    }
})