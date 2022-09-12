import { createSlice } from "@reduxjs/toolkit";
export const openSearchSlice = createSlice({
    name: 'searchResultClicked',
    initialState: {
        value: false,
    },
    reducers: {
        openSearch: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { openSearch } = openSearchSlice.actions
export default openSearchSlice.reducer