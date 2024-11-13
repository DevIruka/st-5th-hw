import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
    const savedTexts = localStorage.getItem("texts");
    return savedTexts ? JSON.parse(savedTexts) : [];
};

const todoSlice = createSlice({
    name: "todoSlice",
    initialState: initialState(),
    reducers: {
        onAddText: (state, { payload }) => {
            state.push(payload);
        },
    },
});

export const { onAddText } = todoSlice.actions;
export default todoSlice.reducer;
