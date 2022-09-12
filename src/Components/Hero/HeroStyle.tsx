import styled from "styled-components";


export const EpicureDef = styled.div`
padding: 6px 16px;
height: 64px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 24px;
line-height: 32px;
letter-spacing: 1.97px;

@media (min-width: 600px) {
    width: 53%;
    font-size: 32px;
    line-height: 40px;
    margin-left: 24%;
    margin-right: 24%;
}
`
export const HeroContainer = styled.div`
height: 273px;
background: url(Images/hero-picture1.png);
background-size: 100% 100%;
justify-content: center;
display: flex;
align-items: center;
left: -140px;
flex-direction: column;

@media (min-width: 600px) {
    background: url(Images/hero-picture1.svg);
    height: 696px;
}
`

export const SearchBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 144px;
background: rgba(255,255,255,0.88);

@media (min-width: 600px) {
    gap: 18px;
    height: 221px;
}
`

export const SearchInput = styled.input`
width: 80%;
border: none;
outline: none;
background: none;
height: 15px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 12px;
line-height: 15px;
letter-spacing: 1.29px;
@media (min-width: 600px) {
    height: 29px;
    font-size: 24px;
    line-height: 29px;
    width: 90%;
}
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
margin-left: 5%;
width: 90%;
@media (min-width: 600px) {
    width: 60%;
    margin-left: 20%;

}
`


export const SearchContainer = styled.div`
width: 350px;
@media (min-width: 600px) {
    width: 54%;
}
`


