import { createSlice } from "@reduxjs/toolkit";

export const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState: {
        allRestaurants: [],
    },
    reducers: {
        setRestaurants: (state, action) => {
            return {
                ...state,
                allRestaurants: action.payload
            };

        },

    }
})

export const { setRestaurants } = restaurantsSlice.actions
export default restaurantsSlice.reducer