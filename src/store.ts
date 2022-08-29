import { configureStore } from "@reduxjs/toolkit";
import restaurantsReducer from './Pages/AllRestaurantsPage/restaurantsSlicer'
import footerClickedReducer from './Components/Header/hamburHeader/footerClickedSlicer'
import dishesReducer from "./Components/signature_dishes/dishesSlicer";


export default configureStore({
    reducer: {
        restaurants: restaurantsReducer,
        footerClicked: footerClickedReducer,
        dishes: dishesReducer
    }

})