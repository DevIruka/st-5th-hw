import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/todoSlice";

const reduxStore = configureStore({
    reducer: {
        todoSlice: todoReducer,
    },
});

export default reduxStore;
