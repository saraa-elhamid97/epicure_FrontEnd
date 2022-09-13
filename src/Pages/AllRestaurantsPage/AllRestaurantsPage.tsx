import React, { useEffect, useState } from 'react'
import RestaurantCard from '../../Components/restaurantCard/RestaurantCard'
import { Map, Div, Rating, Distance, Price_Range, SecondBar, DesktopSecondBar, NavBar, ResContainer, Title, MapButton, Res_Cards, AllButton, OpenButton, NewButton, PopularButton } from './AllRestaurantsPageStyle'
import { useSelector } from 'react-redux'
import { Img } from '../../LayoutStyle'
import { RestaurantInfo } from '../../interfaces';
import { Line } from '../../Components/DishProfile/DishProfileStyle'
import DishDesktop from '../../Components/DishDesktop/DishDesktop'
import PriceRange from '../../Components/PriceRange/PriceRange'



export default function AllRestaurantsPage() {
    const allRestaurants: RestaurantInfo[] = useSelector((state: any) => state.restaurants.allRestaurants);
    const [restaurantsUI, setRestaurantsUI] = useState<RestaurantInfo[]>(allRestaurants);
    const [underline, setUnderline] = useState('all');
    const [clicked, setClicked] = useState('');
    const openDishProfile = useSelector((state: any) => state.dishes.openDishProfile);

    function filterRestaurants(buttonId: string) {
        let filterdRes = allRestaurants.filter((restaurant: RestaurantInfo) => {
            if (buttonId === 'all') return allRestaurants;
            if (buttonId === 'new') return restaurant.newRes === true;
            if (buttonId === 'popular') return restaurant.popular === true;
            if (buttonId === 'open') return restaurant.status === 'Open now';
        });
        setRestaurantsUI(filterdRes);
    }

    useEffect(() => {
        restaurantsUI?.length > 0 ? setRestaurantsUI(restaurantsUI) : setRestaurantsUI(allRestaurants)

    })




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
                    <Price_Range clicked={clicked} onClick={() => setClicked('price')}>
                        <Div>Price Range</Div>
                        <Img src="Images/oneVector.svg" alt="vector" />
                    </Price_Range>
                    {clicked == 'price' && <PriceRange />}
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
            {underline === 'map' && <Map src="Images/map.svg" alt="map" />}
            {underline !== 'map' && <Res_Cards>
                {restaurantsUI.map((element, key) =>
                    <RestaurantCard key={key} chefResComponent={false} allResPage={true} restaurantInfo={{ img_path: element.img_path, heroImg: element.heroImg, restaurantName: element.restaurantName, chefName: element.chefName, stars: element.stars, status: element.status }} />
                )}

            </Res_Cards>
            }
            <Line></Line>
            {openDishProfile && <DishDesktop />}
        </ResContainer >
    )
}
