import { createSlice } from "@reduxjs/toolkit";

export const dishesSlice = createSlice({
    name: 'dishes',
    initialState: {
        allDishes: [],
    },
    reducers: {
        setDishes: (state, action) => {
            return {
                ...state,
                allDishes: action.payload
            };

        },

    }
})

export const { setDishes } = dishesSlice.actions
export default dishesSlice.reducer