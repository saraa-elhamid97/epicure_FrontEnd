import { configureStore } from "@reduxjs/toolkit";
import restaurantsReducer from './Pages/AllRestaurantsPage/restaurantsSlicer'
import footerClickedReducer from './Components/Header/hamburHeader/footerClickedSlicer'
import dishesReducer from "./Components/signature_dishes/dishesSlicer";
import chefsReducer from './Pages/chefsPage/chefsSlicer'
import openSearchReducer from './Components/Header/openSearchSlicer'
import SingInStateSlice from "../src/Components/Header/SingInStateSlice";
import SingUpStateSlice from "../src/Components/Header/SingUpStateSlice";
export default configureStore({
    reducer: {
        restaurants: restaurantsReducer,
        footerClicked: footerClickedReducer,
        dishes: dishesReducer,
        chefs: chefsReducer,
        openSearch: openSearchReducer,
        signupstate: SingUpStateSlice,
        signinstate: SingInStateSlice,
    }

})