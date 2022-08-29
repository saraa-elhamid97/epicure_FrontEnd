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

export const ResName = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
letter-spacing: 2.67px;
`
export const ChefName = styled(ResName)`
font-weight: 200;
font-size: 16px;
line-height: 20px;
letter-spacing: 1.97px;
`

export const Div = styled.div`
display:flex;
`
export const ClockIcon = styled.img`
margin-right: 2%;
`
export const RestStatus = styled(ChefName)`
font-size: 18px;
`

export const NavBar = styled.div`
display: flex;
justify-content: space-between;
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
@media (min-width: 600px) {
    cursor: pointer;
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