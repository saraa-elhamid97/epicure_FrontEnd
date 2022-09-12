import styled from "styled-components";
import { Button, Paragraph } from "../../../LayoutStyle"

export const SearchContainer = styled.div`
height: 413px;
position: fixed;
z-index: 2;
background: white;
left: 0%;
right: 0%;
`
export const Search = styled(Paragraph)`
margin-left: 35%;
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
`

export const Search_icon = styled.img`
`
export const CloseBtn = styled(Button)`
margin-top: -5%;
`
