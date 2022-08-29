import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { DishInfo, RestaurantInfo } from '../../interfaces';
import { BreakfastButton, LunchButton, DinnerButton, NavBar, ResContainer, Img, ResName, ChefName, Div, ClockIcon, RestStatus } from './RestaurantProfileStyle'
import axios from 'axios'
import DishCard from '../../Components/dishCard/DishCard';

export default function RestaurantProfile() {
    const location = useLocation();
    const restaurantData = location.state as RestaurantInfo;
    const [underline, setUnderline] = useState('breakfast');
    const [dishes, setDishes] = useState<DishInfo[]>([]);
    //const name = restaurantData.restaurantName;
    /// console.log(dishes);
    useEffect(() => {
        async function fetchRestaurant() {
            const URL = 'http://localhost:3001/api/restaurants/getRestaurant?name=' + restaurantData.restaurantName.toString();
            const restaurant = await axios.get(URL).then(restaurant => restaurant.data);
            console.log(restaurant);
            setDishes(restaurant.dishes);
        }
        fetchRestaurant();

    });
    // useEffect(() => {
    //     async function fetchRestaurant() {
    //         const restaurant = await axios.get('http://localhost:3001/api/restaurants/getRestaurant?resName={restaurantData.restaurantName}').then(restaurantsData => restaurantsData.data);
    //         // dispatch(setRestaurants(restaurantsData));
    //         console.log(restaurant);
    //     }
    //     fetchRestaurant();

    // });



    // function filterDishes(buttonId: string) {
    //     let filterdRes = allRestaurants.filter((restaurant: RestaurantInfo) => {
    //         if (buttonId === 'all') return allRestaurants;
    //         if (buttonId === 'new') return restaurant.newRes === true;
    //         if (buttonId === 'popular') return restaurant.popular === true;
    //         if (buttonId === 'open') return restaurant.status === 'Open now';
    //     });
    //     setRestaurantsUI(filterdRes);
    // }

    //console.log(dishes);
    return (
        <ResContainer>
            <Img src={restaurantData.img_path} alt="restaurants image" />
            <div>
                <ResName>{restaurantData.restaurantName}</ResName>
                <ChefName>{restaurantData.chefName}</ChefName>
                <Div>
                    <ClockIcon src="Images/clock.svg" alt="clock icon" />
                    <RestStatus>{restaurantData.status}</RestStatus>
                </Div>
                <NavBar>
                    <BreakfastButton underline={underline} id='breakfast' onClick={() => { //filterDishes('breakfast');
                        setUnderline('breakfast');
                    }}>Breakfast</BreakfastButton>
                    <LunchButton id='lunch' underline={underline} onClick={() => { //filterDishes('lunch');
                        setUnderline('lunch');
                    }}>Lunch</LunchButton>
                    <DinnerButton id='dinner' underline={underline} onClick={() => { //filterDishes('dinner');
                        setUnderline('dinner');
                    }}>Dinner</DinnerButton>
                </NavBar>
                <div>
                    {dishes.map((element, key) =>
                        <DishCard key={key} img_path={element.img_path} dishName={element.dishName} ingredients={element.ingredients} type_img={element.type_img} price={element.price} />
                    )}

                </div>
            </div>

        </ResContainer>
    )
}
