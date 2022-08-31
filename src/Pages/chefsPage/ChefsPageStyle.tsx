import styled from "styled-components";
import { ChefName, ChefNameImg } from "../../Components/ChefOfWeek/ChefOfWeekStyle";
import { ButtonProps } from "../../interfaces";
import { Button, NavBar } from "../AllRestaurantsPage/AllRestaurantsPageStyle";




export const Nav_Bar = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-evenly;
    margin: 5% 0 10% -1%;
    @media (min-width: 600px) {
    padding-top: 7%;
    width: 17.92%;
    margin: 0 41.04%;
    justify-content: space-between;
    margin-bottom: 2%;
    }
`

export const ChefsCard = styled.div`
@media (min-width: 600px) {
display: flex;
    flex-wrap: wrap;
    width: 82.4%;
    margin: 0px 11%;
    gap: 2%;
}
`

export const ChefsContainer = styled.div`
`

export const Chef_Name = styled.div`
height: 78px;
margin-top: -20%;
width: 100%;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 47px;
text-align: center;
letter-spacing: 2.67px;
background: rgba(255, 255, 255, 0.8);

`

export const ChefName_Img = styled.div`
    align-content: center;
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 5% 5%;
    height: 334px;
    @media (min-width: 600px) {
        width: 30.07%;
        margin: 0;
    }
`

export const AllButton = styled(Button) <ButtonProps>`
font-weight: ${props => props.clicked === 'all' ? 'bold' : 'normal'};
text-decoration: ${props => props.clicked === 'all' ? 'underline' : 'none'};
text-decoration-color: ${props => props.clicked === 'all' ? 'rgba(222, 146, 0, 0.9)' : 'none'};
@media (min-width: 600px) {
    text-decoration:none;
}
`

export const NewButton = styled(Button) <ButtonProps>`
font-weight: ${props => props.clicked === 'new' ? 'bold' : 'normal'};
text-decoration: ${props => props.clicked === 'new' ? 'underline' : 'none'};
text-decoration-color: ${props => props.clicked === 'new' ? 'rgba(222, 146, 0, 0.9)' : 'none'};
@media (min-width: 600px) {
    text-decoration:none;
}
`
export const MostViewdButton = styled(Button) <ButtonProps>`
font-weight: ${props => props.clicked === 'mostViewed' ? 'bold' : 'normal'};
text-decoration: ${props => props.clicked === 'mostViewed' ? 'underline' : 'none'};
text-decoration-color: ${props => props.clicked === 'mostViewed' ? 'rgba(222, 146, 0, 0.9)' : 'none'};
@media (min-width: 600px) {
    text-decoration:none;
}
`

export const Title = styled.div`
height: 22px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 22px;
letter-spacing: 1.92px;
text-transform: uppercase;
    padding-left: 5%;
    padding-top: 15%;
    @media (min-width: 600px) {
        display:none;
    }

`