import React from 'react'
import { Break } from '../../LayoutStyle';
import { decrementQuantity, incrementQuantity } from '../signature_dishes/dishesSlicer';
import { Dish, Img, Details, AddToBag, IncDecButton, Quantity, QuantityContainer, Div, Input, Form, Label, P, DishName, Ingredients, DishImg, Data } from './DishProfileStyle'
import { useDispatch, useSelector } from 'react-redux';
import { DishInfo } from '../../interfaces';
import SetWindowSize from '../../helpers/SetWindowSize'
import { desktopPrice } from '../../helpers/DesktopFunction';
import { NoType } from '../dishCard/DishCardStyle';

export default function DishProfile() {
    const dish: DishInfo = useSelector((state: any) => state.dishes.clickedDish);
    const quantity = useSelector((state: any) => state.dishes.Quantity);
    const dispatch = useDispatch();
    let windowSize = SetWindowSize();
    let desktopView = windowSize >= 600 ? true : false;
    return (
        <Details>
            <DishImg src={dish.img_path} alt={dish.dishName} />
            <Data>
                <Dish>
                    <DishName>{dish.dishName}</DishName>
                    <Ingredients>{dish.ingredients}</Ingredients>
                    {(dish.type_img == undefined && desktopView) ? <NoType></NoType> : <Img src={dish.type_img} alt={dish.dishName} />}
                    {desktopView && desktopPrice(dish)}
                </Dish>

                <P>Choose a side</P>
                <Form>
                    <Div>
                        <Input type="radio" id="white bread" value="white bread" name="side" />
                        <Label htmlFor="white bread">White bread</Label><Break />
                    </Div>
                    <Input type="radio" id="rice" value="rice" name="side" />
                    <Label htmlFor="rice">Sticky rice</Label>
                </Form>

                <P>Changes</P>
                <Form>
                    <Div>
                        <Input type="checkbox" id="whithout peanuts" value="whithout peanuts" />
                        <Label htmlFor="whithout peanuts">Whithout peanuts</Label><Break />
                    </Div>
                    <Input type="checkbox" id="Less spicy" value="Less spicy" />
                    <Label htmlFor="Less spicy">Sticky Less spicy</Label>
                </Form>

                <P>Quantity</P>
                <QuantityContainer>
                    <Div><IncDecButton onClick={() => dispatch(decrementQuantity())} disabled={quantity === 1}>-</IncDecButton></Div>
                    <Quantity>{quantity}</Quantity>
                    <Div><IncDecButton onClick={() => dispatch(incrementQuantity())}>+</IncDecButton></Div>
                </QuantityContainer>

                <AddToBag>Add to bag</AddToBag>
            </Data>
        </Details>)
}
