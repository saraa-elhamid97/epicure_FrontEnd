import { createSlice } from "@reduxjs/toolkit";

export const chefsSlice = createSlice({
    name: 'chefs',
    initialState: {
        allChefs: [],
    },
    reducers: {
        setChefs: (state, action) => {
            return {
                ...state,
                allChefs: action.payload
            };

        },

    }
})

export const { setChefs } = chefsSlice.actions
export default chefsSlice.reducer