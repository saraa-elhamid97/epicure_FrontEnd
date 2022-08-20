import { createSlice } from "@reduxjs/toolkit";
import { restaurantData } from "../../constants";
export const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState: {
        value: restaurantData,
    },
    reducers: {
        setRestaurants: (state, action) => {
            return {
                ...state,
                value: action.payload
            };

        }
    }
})

export const { setRestaurants } = restaurantsSlice.actions
export default restaurantsSlice.reducer