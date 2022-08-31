import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import HomePage from './Pages/HomePage/HomePage'
import AllRestaurantsPage from './Pages/AllRestaurantsPage/AllRestaurantsPage'
import { Div } from './LayoutStyle'
import ContactUs from './Pages/contactUs/ContactUs'
import TermOfUse from './Pages/TermOfUse/TermOfUse'
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy'
import RestaurantProfile from './Pages/restaurantProfile/RestaurantProfile'
import { setRestaurants } from './Pages/AllRestaurantsPage/restaurantsSlicer';
import axios from 'axios'
import { setDishes } from './Components/signature_dishes/dishesSlicer'
import { setChefs } from './Pages/chefsPage/chefsSlicer'
import ChefsPage from './Pages/chefsPage/ChefsPage'

export default function Layout() {
    const dispatch = useDispatch();


    useEffect(() => {
        async function fetchData() {
            const restaurants = await axios.get('http://localhost:3001/api/restaurants/getRestaurants').then(restaurants => restaurants.data);
            const dishes = await axios.get('http://localhost:3001/api/dishes/getDishes').then(dishes => dishes.data);
            const chefs = await axios.get('http://localhost:3001/api/chefs/getChefs').then(chefs => chefs.data);
            dispatch(setRestaurants(restaurants));
            dispatch(setDishes(dishes));
            dispatch(setChefs(chefs));

        }
        fetchData();

    });


    return (
        <Div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='' element={<HomePage />} />
                    <Route path='restaurantsPage' element={<AllRestaurantsPage />} />
                    <Route path='restaurantProfile' element={<RestaurantProfile />} />
                    <Route path='contactUs' element={<ContactUs />} />
                    <Route path='TermOfUse' element={<TermOfUse />} />
                    <Route path='PrivacyPolicy' element={<PrivacyPolicy />} />
                    <Route path='chefsPage' element={<ChefsPage />} />


                </Routes>
                <Footer />
            </BrowserRouter>
        </Div>
    )
}
