import styled from "styled-components";
import { chefResComponent, allResPage } from '../../interfaces'



export const ResChefName = styled.div<chefResComponent>`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 20px 16px 30px 16px;
gap: 10px;
background: #F9F4EA;
margin-top:-1%;
@media (min-width: 600px) {
    justify-content: center;
    align-items: center;
    padding-bottom: ${props => props.chefResComponent ? '40%' : '24px'};
    padding-top:24px;
    gap: 20px;
}
`

export const ResName = styled.div`
height: 21px;
font-family: 'Helvetica Neue';
font-weight: 400;
font-size: 18px;
line-height: 21px;
letter-spacing: 2.67px;
@media (min-width: 600px) {
font-size: 40px;
line-height: 47px;
text-align: center;
}

`

export const ChefName = styled.div`
height: 20px;
font-family: 'Helvetica Neue';
font-weight: 200;
font-size: 16px;
line-height: 20px;
letter-spacing: 1.97px;
@media (min-width: 600px) {
    font-size: 24px;
    line-height: 30px;
    }
`

export const ResCard = styled.div<allResPage>`
padding-left: 7%;
    padding-bottom: 5%;
   width: 89.09%;
    @media (min-width: 600px) {
        width: ${props => props.allResPage ? '31.94%' : '50%'};
        padding-left: 0;
    padding-bottom: 0;
                }
`

export const Img = styled.img`
width: -webkit-fill-available;

`