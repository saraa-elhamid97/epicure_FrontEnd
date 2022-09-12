import { createSlice } from "@reduxjs/toolkit";



export const dishesSlice = createSlice({
    name: 'dishes',
    initialState: {
        allDishes: [],
        clickedDish: {},
        Quantity: 1,
        openDishProfile: false
    },
    reducers: {
        setDishes: (state, action) => {
            return {
                ...state,
                allDishes: action.payload
            };

        },
        setClickedDish: (state, action) => {
            return {
                ...state,
                clickedDish: action.payload
            };

        },
        setOpenDishProfile: (state, action) => {
            return {
                ...state,
                openDishProfile: action.payload
            };

        },

        incrementQuantity: state => {
            state.Quantity += 1;
        },
        decrementQuantity: state => {
            state.Quantity -= 1;
        },

    }
})

export const { incrementQuantity, decrementQuantity, setDishes, setClickedDish, setOpenDishProfile } = dishesSlice.actions
export default dishesSlice.reducer