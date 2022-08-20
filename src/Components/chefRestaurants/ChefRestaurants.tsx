import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Img } from '../../LayoutStyle'
import { AllRes, GoToAllRes } from '../popular_restaurant/PopularRestaurantsStyle'
import { ChefRes, RestaurantsContainer } from './ChefRestaurantsStyle'
import SetWindowSize from '../../helpers/SetWindowSize'
import { desktopChefRes } from '../../helpers/DesktopFunction'
import { mobileChefRes } from '../../helpers/MobileFunctions'






export default function ChefRestaurants() {
    let windowSize = SetWindowSize();
    let desktopView = windowSize >= 600 ? true : false;
    const navigate = useNavigate();

    function navigateToRestaurantsPage() {
        navigate('restaurantsPage');
        window.scrollTo(0, 0);
    }



    return (
        <RestaurantsContainer>
            <ChefRes>Chef’s Restaurants</ChefRes>
            {desktopView && desktopChefRes()}
            {!desktopView && mobileChefRes()}
            <GoToAllRes onClick={navigateToRestaurantsPage}>
                {!desktopView && <AllRes>All Restaurants   </AllRes>}
                {!desktopView && <Img src="Images/Vector.svg" alt="vector" />}
            </GoToAllRes>
        </RestaurantsContainer>
    )
}
