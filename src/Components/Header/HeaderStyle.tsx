import styled from "styled-components";
import { ButtonProps } from '../../interfaces'

export const LeftHeader = styled.div`
display: flex;
align-items: center;
gap: 10%;
margin-left: 8.8%;
`

export const Epicure = styled.div`
height: 33px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 27px;
line-height: 33px;
letter-spacing: 1.35px;
@media (min-width: 600px) {
    cursor: pointer;
}`

export const Restaurants = styled(Epicure) <ButtonProps>`
height: 22px;
font-size: 18px;
line-height: 22px;
letter-spacing: 1.92px;
text-decoration: ${props => props.underline == 'res' ? 'underline' : 'none'};
text-decoration-color: ${props => props.underline == 'res' ? 'rgba(222, 146, 0, 0.9)' : 'none'};
`
export const Chefs = styled(Restaurants) <ButtonProps>`
text-decoration: ${props => props.underline == 'chefs' ? 'underline' : 'none'};
text-decoration-color: ${props => props.underline == 'chefs' ? 'rgba(222, 146, 0, 0.9)' : 'none'};
`


export const Search_icon = styled.img`
`



export const SearchBar = styled.div`
box-sizing: border-box;
display: flex;
align-items: center;
padding: 6px 12px;
height: 30px;
border: 0.5px solid #000000;
border-radius: 4px;
margin-left: 128%;
    width: 133%;
`



export const SearchInput = styled.input`
    width: 100%;
    border: none;
    outline: none;

`
