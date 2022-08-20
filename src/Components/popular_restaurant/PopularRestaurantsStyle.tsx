import styled from "styled-components";
import { Paragraph } from "../../LayoutStyle";

export const RestaurantsContainer = styled.div`
`
export const PopRes = styled(Paragraph)`
    line-height: 24px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    padding-left: 5%;
    padding-top: 4%;
    @media (min-width: 600px) {
        text-align: center;
        height: 35px;
        font-size: 30px;
        line-height: 35px;

    }
`

export const AllRes = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
height: 35px;
font-weight: 400;
font-size: 16px;
line-height: 35px;
text-align: right;
letter-spacing: 2px;
text-transform: capitalize;
margin-left:5%;
margin-right:3%;
@media (min-width: 600px) {
    font-size: 24px;
    margin-right:1%;
}
`
export const GoToAllRes = styled.div`
display: flex;
cursor: pointer;
@media (min-width: 600px) {
    justify-content: flex-end;
    margin-right: 8.8%;
    margin-top: 1.2%;
}
`

export const DesktopRes = styled.div`
display: flex;
gap: 24px;
width: 82.3%;
    margin: 0 8.8%;

`