import styled from "styled-components";
import { PopRes } from "../popular_restaurant/PopularRestaurantsStyle";

export const ChWeek = styled(PopRes)`

@media (min-width: 600px) {
height: 35px;
font-size: 30px;
line-height: 35px;
text-align: center;
letter-spacing: 1.25px;
}


`

export const ChefImg = styled.img`
z-index:-1;
`

export const ChefName = styled.div`
width: 380.17px;
height: 47px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 47px;
margin-top: -11%;
text-align: center;
letter-spacing: 2.67px;
background: rgba(255, 255, 255, 0.8);
`
export const ChefNameImg = styled.div`
    align-content: center;
    display: flex;
    flex-direction: column;
    padding-right: 5%;
    padding-left: 5%;
    @media (min-width: 600px) {
    padding-left: 0;
    }
`

export const ChefBio = styled.div`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 17px;
    line-height: 28px;
    text-align: justify;
    letter-spacing: 1.25px;
    padding: 0 5%;
        margin-top: 5%;

        @media (min-width: 600px) {
            font-size: 24px;
            line-height: 35px;
            margin-top: 2%;
            padding:0;
            }



`

export const ChWeekContainer = styled.div`
@media (min-width: 600px) {
margin: 0 8.8%;
}
`

export const ChefInfo = styled.div`
@media (min-width: 600px) {
    display: flex;
    }

`