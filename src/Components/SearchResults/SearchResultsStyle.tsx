import styled from "styled-components";
import { SearchInHeader } from "../../interfaces";

export const SearchRes = styled.div<SearchInHeader>`
    background: rgba(255,255,255,0.88);
    width: 350px;
    position: absolute;
    top: ${props => props.searchInHeader ? '123px' : '253px'};
        z-index: 1;
        @media (min-width: 600px) {
    background: ${props => props.searchInHeader ? 'white' : 'rgba(255,255,255,0.88)'};
    margin-left: ${props => props.searchInHeader ? '16%' : '0%'};
    width: ${props => props.searchInHeader ? '20%' : '54%'};
        top: ${props => props.searchInHeader ? '58px' : '521px'};
        }
`


export const Restaurants = styled.div<SearchInHeader>`
margin-left: ${props => props.searchInHeader ? '15%' : '17%'};

@media (min-width: 600px) {
    margin-left: ${props => props.searchInHeader ? '6%' : '25%'};

}
`
export const Dishes = styled(Restaurants)`
`

export const Category = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 14px;
line-height: 17px;
letter-spacing: 1.29px;
margin-bottom: 5%;
@media (min-width: 600px) {
    font-size: 20px;
    margin-bottom: 6%;

}
`


export const Restaurant = styled(Category)`
font-weight: 400;
`

export const Dish = styled(Restaurant)`
`

export const Element = styled.div<SearchInHeader>`
margin-bottom: 5%;
@media (min-width: 600px) {
cursor: pointer;
margin-bottom: ${props => props.searchInHeader ? '10%' : '5%'};

}
`

export const NoResult = styled(Category)`
margin-left: 17%;
@media (min-width: 600px) {
    margin-left: 25%;
}

`