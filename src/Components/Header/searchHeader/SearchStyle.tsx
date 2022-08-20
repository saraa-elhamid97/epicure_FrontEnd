import styled from "styled-components";
import { Button, Paragraph } from "../../../LayoutStyle"

export const SearchContainer = styled.div`
height: 413px;
position: fixed;
z-index: 1;
background: white;
left: 0%;
right: 0%;
@media (min-width: 600px) {
    left: 66%;
    top: 64px;
    height: 586px;
}
`
export const Search = styled(Paragraph)`
margin-left: 35%;
@media (min-width: 600px) {
    margin-left: 40%;

}
`

export const SearchInput = styled.input`
    width: 60%;
    border: none;
    outline: none;

`

export const Top = styled.div`
display: flex;
align-items: center;
`

export const SearchBar = styled.div`
box-sizing: border-box;
display: flex;
align-items: center;
padding: 6px 12px;
gap: 8px;
height: 30px;
border: 0.5px solid #000000;
border-radius: 4px;
margin: 0 2%;
width: 90%;
position: relative;
@media (min-width: 600px) {
    margin: 0 5%;

}
`

export const Search_icon = styled.img``
export const CloseBtn = styled(Button)`
margin-top: -5%;
@media (min-width: 600px) {
    margin-top: -1%;

}
`

