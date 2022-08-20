import React from 'react'
import { Img } from '../../LayoutStyle'
import { DishInfo } from '../../interfaces'
import { ShekelDesktop, Line, DeskPrice, Dishcard, DishName, Ingredients, DishData, Price, PriceTag, DishImg } from './DishCardStyle'
import SetWindowSize from '../../helpers/SetWindowSize'
import { desktopPrice } from '../../helpers/DesktopFunction'
import { mobilePrice } from '../../helpers/MobileFunctions'


export default function DishCard(props: DishInfo) {
    let windowSize = SetWindowSize();
    let desktopView = windowSize >= 600 ? true : false;


    return (
        <Dishcard>
            <DishImg src={props.img_path} alt={props.dishName} />
            <DishData>
                <DishName>{props.dishName}</DishName>
                <Ingredients>{props.ingredients}</Ingredients>
                <Img src={props.type_img} alt={props.dishName} />
                {desktopView && desktopPrice(props)}
                {!desktopView && mobilePrice(props)}
            </DishData>
        </Dishcard>
    )
}
