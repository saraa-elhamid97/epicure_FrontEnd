import { createSlice } from "@reduxjs/toolkit";
export const footerClickedSlice = createSlice({
    name: 'footerClicked',
    initialState: {
        value: false,
    },
    reducers: {
        isClicked: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { isClicked } = footerClickedSlice.actions
export default footerClickedSlice.reducer