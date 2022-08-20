import React from 'react'
import { Img } from '../../LayoutStyle'
import { AllRes, GoToAllRes, PopRes, RestaurantsContainer } from './PopularRestaurantsStyle'
import { useNavigate } from 'react-router-dom'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import SetWindowSize from '../../helpers/SetWindowSize'
import { mobilePopRes } from '../../helpers/MobileFunctions'
import { desktopPopRes } from '../../helpers/DesktopFunction'





export default function PopularRestaurants() {
    let windowSize = SetWindowSize();
    let desktopView = windowSize >= 600 ? true : false;


    const navigate = useNavigate();

    function navigateToRestaurantsPage() {
        navigate('restaurantsPage');
        window.scrollTo(0, 0);

    }






    return (
        <RestaurantsContainer>
            <PopRes>popular restaurant in epicure:</PopRes>
            {desktopView && desktopPopRes()}
            {!desktopView && mobilePopRes()}
            <GoToAllRes onClick={navigateToRestaurantsPage}>
                <AllRes>All Restaurants   </AllRes>
                <Img src="Images/Vector.svg" alt="vector" />
            </GoToAllRes>
        </RestaurantsContainer>
    )
}
