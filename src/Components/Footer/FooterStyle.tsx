import styled from "styled-components";



export const FooterContainer = styled.div`
position: relative;
bottom: 0%;
margin-left:5%;
display: flex;
flex-direction: column;
margin-top: 5%;
@media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-evenly;
    width: 50%;
    margin-left: 27%;
    margin-top: 2%;
}
`
export const FooterInfo = styled.div`
height: 22px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 22px;
letter-spacing: 1.92px;
margin-bottom:10%;
@media (min-width: 600px) {
    margin-bottom: 2%;
}

`
