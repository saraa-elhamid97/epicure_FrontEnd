import styled from "styled-components";
import { ButtonProps } from "../../interfaces";





export const ResContainer = styled.div`
padding-top: 1%;
@media (min-width: 600px) {
    padding-top: 7%;
}
`

export const Title = styled.p`
height: 22px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 22px;
letter-spacing: 1.92px;
text-transform: uppercase;
    padding-left: 5%;
    padding-top: 8%;
    @media (min-width: 600px) {
        display:none;
    }

`
export const NavBar = styled.div`
display: flex;
justify-content: space-between;
padding-left: 3%;
    padding-right: 3%;
    @media (min-width: 600px) {
        margin: 3% 31.66%;
            padding:0;
    }
`

export const ResCards = styled.div`
margin-top: 9%;
margin-left: -2%;
@media (min-width: 600px) {
display: flex;
gap: 24px;
    margin: 0 8.8%;
    flex-wrap: wrap;
}
`

export const Button = styled.button`
background: none;
border: none;
height: 22px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 22px;
letter-spacing: 1.92px;
padding-left: 2%;
@media (min-width: 600px) {
    cursor: pointer;
}
`

export const AllButton = styled(Button) <ButtonProps>`
text-decoration: ${props => props.underline == 'all' ? 'underline' : 'none'};
text-decoration-color: ${props => props.underline == 'all' ? 'rgba(222, 146, 0, 0.9)' : 'none'};
font-weight: ${props => props.underline == 'all' ? 'bold' : 'normal'};
@media (min-width: 600px) {
    text-decoration:none;
}
`
export const NewButton = styled(Button) <ButtonProps>`
text-decoration: ${props => props.underline == 'new' ? 'underline' : 'none'};
text-decoration-color: ${props => props.underline == 'new' ? 'rgba(222, 146, 0, 0.9)' : 'none'};
font-weight: ${props => props.underline == 'new' ? 'bold' : 'normal'};
@media (min-width: 600px) {
    text-decoration:none;
}
`
export const PopularButton = styled(Button) <ButtonProps>`
text-decoration: ${props => props.underline == 'popular' ? 'underline' : 'none'};
text-decoration-color: ${props => props.underline == 'popular' ? 'rgba(222, 146, 0, 0.9)' : 'none'};
font-weight: ${props => props.underline == 'popular' ? 'bold' : 'normal'};
@media (min-width: 600px) {
    text-decoration:none;
}
`
export const OpenButton = styled(Button) <ButtonProps>`
text-decoration: ${props => props.underline == 'open' ? 'underline' : 'none'};
text-decoration-color: ${props => props.underline == 'open' ? 'rgba(222, 146, 0, 0.9)' : 'none'};
font-weight: ${props => props.underline == 'open' ? 'bold' : 'normal'};
@media (min-width: 600px) {
    text-decoration:none;
}
`

export const MapButton = styled(Button) <ButtonProps>`
display:none;
@media (min-width: 600px) {
    display:unset;
    font-weight: ${props => props.underline == 'map' ? 'bold' : 'normal'};
}
`
export const Res_Cards = styled(ResCards)``

export const DesktopSecondBar = styled.div`
display:none;
@media (min-width: 600px) {
    display:flex;
    background: #FAFAFA;
    height: 60px;
    margin-bottom: 3%;
}
`
export const SecondBar = styled.div`
@media (min-width: 600px) {
    margin: 0 33.5%;
    display:flex;
    width: 60%;
    justify-content: space-evenly;
}
`

const BarElementStyle = styled.div`
display: flex;
    align-items: center;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 1.92px;
    cursor:pointer;
`
export const PriceRange = styled(BarElementStyle) <ButtonProps>`
    ${props => props.clicked == 'price' && 'background-color: #D0CFCF;'};
`

export const Distance = styled(BarElementStyle) <ButtonProps>`
${props => props.clicked == 'distance' && 'background-color: #D0CFCF;'};
`
export const Rating = styled(BarElementStyle) <ButtonProps>`
${props => props.clicked == 'rating' && 'background-color: #D0CFCF;'};
`


export const Div = styled.div`
margin-right: 5px;
`

export const Map = styled.img`
margin: 0 8.8%;
`