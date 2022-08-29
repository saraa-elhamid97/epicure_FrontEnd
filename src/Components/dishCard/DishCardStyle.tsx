import styled from "styled-components";
import { ChefName, ResName } from "../restaurantCard/RestaurantCardStyle";
export const Dishcard = styled.div`
padding-left: 7%;
    padding-bottom: 5%;
   width: 89.09%;
    @media (min-width: 600px) {
        width: 50%;
        padding-left: 0;
    padding-bottom: 0;
                }

`

export const DishName = styled(ResName)`
@media (min-width: 600px) {
height: 94px;
text-align: center;
}
`
export const Ingredients = styled(ChefName)`
margin-bottom: 25%;
@media (min-width: 600px) {
height: 176px;
text-align: center;
width: 78%;
margin-top: -15%;
margin-bottom: 0%;
}
`
export const DishData = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 20px 16px 30px 16px;
gap: 10px;
background: #F9F4EA;
margin-top:-1%;
@media (min-width: 600px) {
    justify-content: center;
    align-items: center;
    padding: 24px 0px;
    gap: 20px;
}
`
export const PriceTag = styled.div`
display: flex;
`

export const Price = styled.div`
margin-left: 10%;
height: 19px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
@media (min-width: 600px) {
    margin-left:0;
height: 30px;
font-weight: 200;
font-size: 24px;
line-height: 30px;
text-align: center;
letter-spacing: 1.97px;
}
`
export const DishImg = styled.img`
width: -webkit-fill-available;
`

export const DeskPrice = styled.div`
display:flex;
width: 75.8%;
align-items: center;
gap: 2%;
`
export const Line = styled.div`
width: 39%;
height: 0px;
border: 0.5px solid #979797;
`

export const ShekelDesktop = styled.img`
width: 5.5%;
`