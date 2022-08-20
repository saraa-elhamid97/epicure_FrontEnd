import styled from "styled-components";

export const Container = styled.div`
background: #FAFAFA;
height: auto;
margin-top: 7%;
`
export const GooglePlay = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 7px 12px;
gap: 25%;
width: 180px;
height: 52px;
border: 0.5px solid #000000;
border-radius: 10px;
`
export const AppStore = styled(GooglePlay)`
gap:10%;
`

export const Gplay_AppStore = styled.div`
display: flex;
flex-direction: column;
align-content: center;
align-items: center;
`

export const GpImg = styled.img`

`
export const AppStoreImg = styled.img`

`

export const AboutUs = styled.div`
line-height: 35px;
letter-spacing: 1.25px;
text-transform: uppercase;
@media (min-width: 600px) {
    letter-spacing: 2.14px;
    font-size: 30px;
    margin-top:2%;

}
`
export const Bio = styled.div`
line-height: 28px;
letter-spacing: 2.14px;
margin-bottom: 3%;
@media (min-width: 600px) {
    font-size: 20px;
    width: 61%;
}
`

export const About_us = styled.div`
	display: flex;
    flex-direction: column;
    gap: 20px;
    font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
`
export const Install = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
@media (min-width: 600px) {
    flex-direction: row-reverse;
    align-self:flex-start;
    margin-bottom: 3%;
}
`
export const Info = styled.div`
display: flex;
flex-direction: column;
margin-left: 5%;
gap: 32px;
@media (min-width: 600px) {
    flex-direction: row-reverse;
}
`

export const GetIt = styled.div`
height: 20px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
text-align: center;
letter-spacing: 1.29px;
`

export const LogoMobile = styled.img`
margin-top:2%;
@media (min-width: 600px) {
  display:none;
}
`

export const Install_AboutUs = styled.div`
display: flex;
flex-direction: column;
gap: 32px;
@media (min-width: 600px) {
    flex-direction: column-reverse;
    width: 64%;
    margin-right: 27%;
}
`

export const LogoDesktop = styled.img`
display:none;
@media (min-width: 600px) {
  display:unset;

}
`

export const Logo = styled.div`
@media (min-width: 600px) {
    align-self: center;
    margin-right: 9%;  
  }
`