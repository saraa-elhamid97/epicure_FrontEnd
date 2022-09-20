import styled from "styled-components";
import { Button } from "../../LayoutStyle";


export const DishContainer = styled.div`
    z-index: 4;
    width: 50%;
    margin: auto;
    top: 450px;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    height: 1125px;
`

export const Details = styled.div`
    background: #FFFFFF;

`
export const DishImg = styled.img`
width:100%;
`

export const CloseBtn = styled.div`
`
export const X_icon = styled.img`
    margin: 4% 0%;
`

export const DishName = styled.div`
margin-left: 5.33%;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 26px;
letter-spacing: 2.67px;
margin-top: 4%;
`
export const Ingredients = styled(DishName)`
    width: 77%;
    font-weight: 200;
    font-size: 16px;
    line-height: 18px;
letter-spacing: 1.97px;
`

export const P = styled.p`
margin-left: 5.33%;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 20px;
line-height: 18px;
letter-spacing: 1.97px;
text-decoration: underline;
text-decoration-color: #DE9200E5;
text-underline-offset: 8px;
`

export const Form = styled.form`
margin-left: 5.33%;
`
export const Input = styled.input`
`
export const Label = styled.label`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 18px;
letter-spacing: 1.97px;
`

export const Div = styled.div`
margin-bottom: 3%;
`

export const QuantityContainer = styled.div`
display: flex;
margin-left: 5.33%;
align-items: center;
width: 19%;
    justify-content: space-between;
`

export const Quantity = styled(Label)`
`

export const IncDecButton = styled(Button)`
font-size: 22px;
padding: 0;
    width: fit-content;
`

export const AddToBag = styled.button`
width: 54%;
height: 48px;
margin: 7% 0 7% 5.33%;
margin: 7% 0 7% 5.33%;
    background: black;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 2.67px;
    text-transform: uppercase;
    color: #FFFFFF;
`

export const Line = styled.div`
width: 100%;
height: 0px;
border: 1px solid #F2F2F2;
@media (min-width: 600px) {
    margin-top: 2%;
}
`

export const Modal = styled.div`
position: fixed;
background: #000000B2;
top: 0;
z-index: 3;
bottom: 0;
    left: 0;
    right: 0;
`

