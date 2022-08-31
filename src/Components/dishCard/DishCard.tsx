import React from 'react'
import { DishInfoToShow } from '../../interfaces'
import { Img, Dishcard, DishName, Ingredients, DishData, DishImg } from './DishCardStyle'
import SetWindowSize from '../../helpers/SetWindowSize'
import { desktopPrice } from '../../helpers/DesktopFunction'
import { mobilePrice } from '../../helpers/MobileFunctions'


export default function DishCard(props: DishInfoToShow) {
    let windowSize = SetWindowSize();
    let desktopView = windowSize >= 600 ? true : false;


    return (
        <Dishcard dishesInRestaurantProfile={props.dishesInRestaurantProfile}>
            <DishImg dishesInRestaurantProfile={props.dishesInRestaurantProfile} src={props.dishInfo.img_path} alt={props.dishInfo.dishName} />
            <DishData dishesInRestaurantProfile={props.dishesInRestaurantProfile}>
                <DishName>{props.dishInfo.dishName}</DishName>
                <Ingredients>{props.dishInfo.ingredients}</Ingredients>
                <Img dishesInRestaurantProfile={props.dishesInRestaurantProfile} src={props.dishInfo.type_img} alt={props.dishInfo.dishName} />
                {desktopView && desktopPrice(props.dishInfo)}
                {!desktopView && mobilePrice(props)}
            </DishData>
        </Dishcard>
    )
}
