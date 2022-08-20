import styled from "styled-components";
import { Paragraph } from "../../LayoutStyle";
import { SigDish } from '../signature_dishes/SignatureDishesStyle'


export const TypeContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 32px;
height: 584px;
left: -1px;
background: #FAFAFA;
margin-top: 10%;
@media (min-width: 600px) {
    height: 265px;
}

`

export const Type = styled(Paragraph)`
height: 35px;
line-height: 30px;
text-align: center;
letter-spacing: 1.97px;
`
export const TypeData = styled.div`
@media (min-width: 600px) {
    display: flex;
    width: 31%;
    justify-content: space-between;
    margin-bottom: 5%;
    margin-left: 6%;
}
`

export const IconsMeaning = styled(SigDish)`
@media (min-width: 600px) {
    width: 46%;
    height: 35px;
    font-size: 30px;
    line-height: 35px;
    letter-spacing: 2.14px;}
`