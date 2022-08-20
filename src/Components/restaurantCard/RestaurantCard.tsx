import React from 'react'
import { ResInfoToShow } from '../../interfaces'
import Stars from '../Stars/Stars'
import { ChefName, ResCard, ResChefName, ResName, Img } from './RestaurantCardStyle'


export default function RestaurantCard(props: ResInfoToShow) {
    return (
        <ResCard allResPage={props.allResPage}>
            <Img src={props.restaurantInfo.img_path} alt={props.restaurantInfo.restaurantName} />
            <ResChefName chefResComponent={props.chefResComponent}>
                <ResName>{props.restaurantInfo.restaurantName}</ResName>
                {!props.chefResComponent && <ChefName>{props.restaurantInfo.chefName}</ChefName>}
                {!props.chefResComponent && <Stars starsNumber={props.restaurantInfo.stars!} />}
            </ResChefName>
        </ResCard>
    )
}
