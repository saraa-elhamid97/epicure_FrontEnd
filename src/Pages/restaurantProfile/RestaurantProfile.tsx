import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { DishInfo, RestaurantInfo } from '../../interfaces';
import { ResInfo, Clock, Container, BreakfastButton, LunchButton, DinnerButton, NavBar, ResContainer, Img, ResName, ChefName, Div, ClockIcon, RestStatus } from './RestaurantProfileStyle'
import axios from 'axios'
import DishCard from '../../Components/dishCard/DishCard';
import SetWindowSize from '../../helpers/SetWindowSize'
import { Line } from '../../Components/DishDesktop/DishDesktopStyle';
import { useSelector } from 'react-redux';
import DishDesktop from '../../Components/DishDesktop/DishDesktop';
import HeaderSignIn from '../../Components/Header/HeaderSignIn'
import HeaderSignUp from '../../Components/Header/HeaderSignUp'

export default function RestaurantProfile() {
    const location = useLocation();
    const restaurantData = location.state as RestaurantInfo;
    const [underline, setUnderline] = useState('breakfast');
    let windowSize = SetWindowSize();
    let desktopView = windowSize >= 600 ? true : false;
    const [dishes, setDishes] = useState<DishInfo[]>([]);
    const openDishProfile = useSelector((state: any) => state.dishes.openDishProfile);
    const signInState: boolean = useSelector((state: any) => state.signinstate.value);
    const signUpState: boolean = useSelector((state: any) => state.signupstate.value);

    useEffect(() => {
        async function fetchRestaurant() {
            const URL = 'http://localhost:3001/api/restaurants/getRestaurant?name=' + restaurantData.restaurantName.toString();
            const restaurant = await axios.get(URL).then(restaurant => restaurant.data);
            setDishes(restaurant[0].dishes);
        }
        fetchRestaurant();

    });

    return (
        <Div>
            {desktopView && ((signInState && <HeaderSignIn />) || (signUpState && <HeaderSignUp />))}

            <ResContainer>
                {desktopView ? <Img src={restaurantData.heroImg} alt="restaurants image" /> : <Img src={restaurantData.img_path} alt="restaurants image" />}
                <Div>
                    <ResInfo>
                        <ResName>{restaurantData.restaurantName}</ResName>
                        <ChefName>{restaurantData.chefName}</ChefName>
                        <Clock>
                            <ClockIcon src="Images/clock.svg" alt="clock icon" />
                            <RestStatus>{restaurantData.status}</RestStatus>
                        </Clock>
                    </ResInfo>
                    <NavBar>
                        <BreakfastButton underline={underline} id='breakfast' onClick={() => {
                            // filterDishes('breakfast');
                            setUnderline('breakfast');
                        }}>Breakfast</BreakfastButton>
                        <LunchButton id='lunch' underline={underline} onClick={() => {
                            // filterDishes('lunch');
                            setUnderline('lunch');
                        }}>Lunch</LunchButton>
                        <DinnerButton id='dinner' underline={underline} onClick={() => {
                            // filterDishes('dinner');
                            setUnderline('dinner');
                        }}>Dinner</DinnerButton>
                    </NavBar>
                    <Container>
                        {underline === 'breakfast' && dishes.filter((dish: DishInfo) => dish.meal === 'breakfast').map((element, key) =>
                            <DishCard key={key} dishesInRestaurantProfile={true} dishInfo={{ img_path: element.img_path, dishName: element.dishName, ingredients: element.ingredients, type_img: element.type_img, price: element.price }} />
                        )}
                        {underline === 'lunch' && dishes.filter((dish: DishInfo) => dish.meal === 'lunch').map((element, key) =>
                            <DishCard key={key} dishesInRestaurantProfile={true} dishInfo={{ img_path: element.img_path, dishName: element.dishName, ingredients: element.ingredients, type_img: element.type_img, price: element.price }} />
                        )}
                        {underline === 'dinner' && dishes.filter((dish: DishInfo) => dish.meal === 'dinner').map((element, key) =>
                            <DishCard key={key} dishesInRestaurantProfile={true} dishInfo={{ img_path: element.img_path, dishName: element.dishName, ingredients: element.ingredients, type_img: element.type_img, price: element.price }} />
                        )}
                    </Container>

                </Div>
                <Line></Line>
            </ResContainer>
            {openDishProfile && <DishDesktop />}
        </Div>
    )
}
