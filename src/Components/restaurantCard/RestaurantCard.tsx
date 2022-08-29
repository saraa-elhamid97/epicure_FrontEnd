import React from 'react'
import { ResInfoToShow, RestaurantInfo } from '../../interfaces'
import Stars from '../Stars/Stars'
import { ChefName, ResCard, ResChefName, ResName, Img } from './RestaurantCardStyle'
import { useNavigate } from 'react-router-dom';


export default function RestaurantCard(props: ResInfoToShow) {
    const navigate = useNavigate();

    function navigateToRestaurantProfile(props: RestaurantInfo) {
        navigate('/restaurantProfile', { state: props });
        window.scrollTo(0, 0);

    }
    return (
        <ResCard onClick={() => navigateToRestaurantProfile(props.restaurantInfo)} allResPage={props.allResPage}>
            <Img src={props.restaurantInfo.img_path} alt={props.restaurantInfo.restaurantName} />
            <ResChefName chefResComponent={props.chefResComponent}>
                <ResName>{props.restaurantInfo.restaurantName}</ResName>
                {!props.chefResComponent && <ChefName>{props.restaurantInfo.chefName}</ChefName>}
                {!props.chefResComponent && <Stars starsNumber={props.restaurantInfo.stars!} />}
            </ResChefName>
        </ResCard>
    )
}
