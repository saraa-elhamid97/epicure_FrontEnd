import { configureStore } from "@reduxjs/toolkit";
import restaurantsReducer from './Pages/AllRestaurantsPage/restaurantsSlicer'
import footerClickedReducer from './Components/Header/hamburHeader/footerClickedSlicer'


export default configureStore({
    reducer: {
        restaurants: restaurantsReducer,
        footerClicked: footerClickedReducer
    }

})