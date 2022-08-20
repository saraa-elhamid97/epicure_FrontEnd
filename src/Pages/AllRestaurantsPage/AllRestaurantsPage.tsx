import React, { useState } from 'react'
import { restaurantData } from '../../constants'
import RestaurantCard from '../../Components/restaurantCard/RestaurantCard'
import { Map, Div, Rating, Distance, PriceRange, SecondBar, DesktopSecondBar, NavBar, ResContainer, Title, MapButton, Res_Cards, AllButton, OpenButton, NewButton, PopularButton } from './AllRestaurantsPageStyle'
import { useSelector, useDispatch } from 'react-redux'
import { setRestaurants } from './restaurantsSlicer';
import SetWindowSize from '../../helpers/SetWindowSize'
import { Img } from '../../LayoutStyle'



export default function AllRestaurantsPage() {
    const restaurantsUI = useSelector((state: any) => state.restaurants.value);
    const [underline, setUnderline] = useState('all');
    const [clicked, setClicked] = useState('');
    const dispatch = useDispatch();
    let windowSize = SetWindowSize();
    let desktopView = windowSize >= 600 ? true : false;







    function filterRestaurants(buttonId: string) {
        var filterdRes = restaurantData.filter(restaurant => {
            if (buttonId == 'all') return restaurantData;
            if (buttonId == 'new') return restaurant.newRes == true;
            if (buttonId == 'popular') return restaurant.popular == true;
            if (buttonId == 'open') return restaurant.status == 'open';
        });
        dispatch(setRestaurants(filterdRes));
    }





    return (
        <ResContainer>
            <Title>Restaurants</Title>
            <NavBar>
                <AllButton underline={underline} id='all' onClick={() => { filterRestaurants('all'); setUnderline('all'); setClicked('') }}>All</AllButton>
                <NewButton id='new' underline={underline} onClick={() => { filterRestaurants('new'); setUnderline('new'); setClicked('') }}>New</NewButton>
                <PopularButton id='popular' underline={underline} onClick={() => { filterRestaurants('popular'); setUnderline('popular'); setClicked('') }}>Most Popular</PopularButton>
                <OpenButton id='open' underline={underline} onClick={() => { filterRestaurants('open'); setUnderline('open'); setClicked('') }}>Open Now</OpenButton>
                <MapButton id='map' underline={underline} onClick={() => { setUnderline('map'); setClicked('') }}>Map View</MapButton>

            </NavBar>
            <DesktopSecondBar>
                <SecondBar>
                    <PriceRange clicked={clicked} onClick={() => setClicked('price')}>
                        <Div>Price Range</Div>
                        <Img src="Images/oneVector.svg" alt="vector" />
                    </PriceRange>
                    <Distance clicked={clicked} onClick={() => setClicked('distance')}>
                        <Div>Distance</Div>
                        <Img src="Images/oneVector.svg" alt="vector" />
                    </Distance>
                    <Rating clicked={clicked} onClick={() => setClicked('rating')}>
                        <Div>Rating</Div>
                        <Img src="Images/oneVector.svg" alt="vector" />
                    </Rating>
                </SecondBar>

            </DesktopSecondBar>
            {underline == 'map' && <Map src="Images/map.svg" alt="map" />}
            {underline != 'map' && <Res_Cards>
                {restaurantsUI.map((element: any) =>
                    <RestaurantCard chefResComponent={false} allResPage={true} restaurantInfo={{ img_path: element.img_path, restaurantName: element.restaurantName, chefName: element.chefName, stars: element.stars }} />
                )}

            </Res_Cards>
            }
        </ResContainer >
    )
}
