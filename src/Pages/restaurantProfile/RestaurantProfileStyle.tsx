import styled from "styled-components";
import { ButtonProps } from "../../interfaces";

export const ResContainer = styled.div`
padding-top: 46px;
@media (min-width: 600px) {
    padding-top: 64px;
}
`

export const Img = styled.img`
width:100%;
`

export const ResInfo = styled.div`
   @media (min-width: 600px) {
   display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   }

`

export const ResName = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
letter-spacing: 2.67px;
margin-left: 5.33%;
margin-top:3%;
@media (min-width: 600px) {
    margin-left: 0;
    font-size: 56px;
line-height: 64px;
}
`
export const ChefName = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 16px;
line-height: 20px;
letter-spacing: 1.97px;
margin-left: 5.33%;
margin-top:3%;
@media (min-width: 600px) {
    margin-top:0;
    margin-left: 0;
    font-size: 32px;
line-height: 36px;
}
`

export const Clock = styled.div`
display:flex;
margin-left: 5.33%;
align-items: center;
margin-top:3%;
@media (min-width: 600px) {
    margin-left: 0;
    width: 8%;
}
`
export const Div = styled.div`

`
export const ClockIcon = styled.img`
margin-right: 2%;
`
export const RestStatus = styled.div`
margin-left: 0;
height: 20px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 20px;
letter-spacing: 1.97px;
`

export const NavBar = styled.div`
display: flex;
justify-content: space-between;
width: 65.6%;
    margin-top: 5%;
    margin-left: 5.33%;
    margin-bottom: 5%;
    @media (min-width: 600px) {
        width: 34%;
    margin: 3% 33%;
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
padding: 0;
@media (min-width: 600px) {
    cursor: pointer;
    font-size: 24px;
line-height: 29px;
}
`

export const BreakfastButton = styled(Button) <ButtonProps>`
text-decoration: ${props => props.underline === 'breakfast' ? 'underline' : 'none'};
text-decoration-color: ${props => props.underline === 'breakfast' ? 'rgba(222, 146, 0, 0.9)' : 'none'};
font-weight: ${props => props.underline === 'breakfast' ? 'bold' : 'normal'};
`
export const LunchButton = styled(Button) <ButtonProps>`
text-decoration: ${props => props.underline === 'lunch' ? 'underline' : 'none'};
text-decoration-color: ${props => props.underline === 'lunch' ? 'rgba(222, 146, 0, 0.9)' : 'none'};
font-weight: ${props => props.underline === 'lunch' ? 'bold' : 'normal'};
`
export const DinnerButton = styled(Button) <ButtonProps>`
text-decoration: ${props => props.underline === 'dinner' ? 'underline' : 'none'};
text-decoration-color: ${props => props.underline === 'dinner' ? 'rgba(222, 146, 0, 0.9)' : 'none'};
font-weight: ${props => props.underline === 'dinner' ? 'bold' : 'normal'};
`

export const Container = styled.div`
    margin-left: 5.33%;
    display: flex;
    flex-direction: column;
@media (min-width: 600px) {
flex-wrap: wrap;
margin: 0 8.8%;
flex-direction: row;
    width: 82.4%;
    gap: 2%;
}
`