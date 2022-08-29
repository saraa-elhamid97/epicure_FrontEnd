import React from 'react'
import { DishContainer, SigDish } from './SignatureDishesStyle';
import SetWindowSize from '../../helpers/SetWindowSize'
import { DesktopDishes } from '../../helpers/DesktopFunction';
import { MobileDishes } from '../../helpers/MobileFunctions';


export default function SignatureDishes() {
    let windowSize = SetWindowSize();
    let desktopView = windowSize >= 600 ? true : false;
    return (
        <DishContainer>
            <SigDish>Signature Dish Of:</SigDish>
            <>
                {desktopView ? DesktopDishes() : MobileDishes()}
            </>
        </DishContainer>)
}
