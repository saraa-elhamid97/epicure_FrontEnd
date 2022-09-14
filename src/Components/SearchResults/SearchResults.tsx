import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DishInfo, RestaurantInfo, SearchInput } from '../../interfaces'
import { setClickedDish, setOpenDishProfile } from '../signature_dishes/dishesSlicer';
import SetWindowSize from '../../helpers/SetWindowSize'
import { NoResult, Element, Dish, Restaurant, Category, Restaurants, Dishes, SearchRes } from './SearchResultsStyle';
import { openSearch } from '../Header/openSearchSlicer';


export default function SearchResults(props: SearchInput) {
    const dishes: DishInfo[] = useSelector((state: any) => state.dishes.allDishes);
    const restaurants: RestaurantInfo[] = useSelector((state: any) => state.restaurants.allRestaurants);
    let searchedRestaurants: RestaurantInfo[] = restaurants.filter(restaurant => {
        return restaurant.restaurantName.toLowerCase().includes(props.searchInput.toLowerCase());
    });
    let searchedDishes: DishInfo[] = dishes.filter(dish => {
        return dish.dishName.toLowerCase().includes(props.searchInput.toLowerCase());
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let windowSize = SetWindowSize();
    let desktopView = windowSize >= 600 ? true : false;

    function navigateToRestaurantProfile(props: RestaurantInfo) {
        navigate('/restaurantProfile', { state: props });
        window.scrollTo(0, 0);

    }
    return (
        <SearchRes searchInHeader={props.searchInHeader} style={{ maxWidth: '777.6px' }}>
            {searchedRestaurants.length > 0 && <Restaurants searchInHeader={props.searchInHeader}>
                <Category>Restaurants:</Category>
                <Restaurant>
                    {searchedRestaurants.slice(0, 3).map((element, key) =>
                        <Element key={key} searchInHeader={props.searchInHeader} onClick={() => {
                            navigateToRestaurantProfile(element);
                            dispatch(openSearch(false));
                        }} >{element.restaurantName}</Element>
                    )}
                </Restaurant>
            </Restaurants>
            }
            {searchedDishes.length > 0 && <Dishes searchInHeader={props.searchInHeader}>
                <Category>Dishes:</Category>
                <Dish>
                    {searchedDishes.slice(0, 3).map((element, key) =>

                        <Element key={key} searchInHeader={props.searchInHeader} onClick={() => {
                            dispatch(setClickedDish(element));
                            dispatch(openSearch(false));
                            if (desktopView) {
                                dispatch(setOpenDishProfile(true));
                                window.scrollTo(0, 0);
                            }
                            else {
                                navigate('/dishMobile');
                                window.scrollTo(0, 0);

                            }
                        }}>{element.dishName}</Element>)}
                </Dish>
            </Dishes>
            }


            {(searchedDishes.length === 0 && searchedRestaurants.length === 0) && <NoResult>No Results</NoResult>}
        </SearchRes>
    )
}
