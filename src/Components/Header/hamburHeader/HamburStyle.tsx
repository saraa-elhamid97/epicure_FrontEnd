import styled from "styled-components";
import { Button } from "../../../LayoutStyle";


export const HamburInfo = styled.div`
display: flex;
flex-direction: column;
position: relative;
margin-left:5%

`

export const CloseBtn = styled(Button)`
margin-top: 2%;

`

export const HamburContainer = styled.div`
position: fixed;
z-index: 1;
background: white;
left: 0%;
right: 0%;
height: 370px;
`
export const X_icon = styled.img``

export const Line = styled.div`
height: 0px;
left: -1px;
border: 1px solid #F2F2F2;
`