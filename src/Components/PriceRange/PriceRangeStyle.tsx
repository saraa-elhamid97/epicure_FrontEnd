import styled from "styled-components";


export const PriceRangeContainer = styled.div`
    position: absolute;
    width: 25%;
    z-index: 2;
    background: #FFFFFF;
    top: 267px;
    left: 27%;
    text-align: center;
`

export const SliderWrapper = styled.div`
    width: 90%;
    margin: 5%;
    `

export const SelectedRange = styled.p`
    font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
letter-spacing: 1.92px;
    `


export const Range = styled.div`
display: flex;
width: 30%;
    margin: auto;
    gap: 5px;
    `

export const Min = styled.div`
    display: flex;
    gap: 3px;
    justify-content: center;
    align-items: center;    `

export const Max = styled(Min)``

export const ShekelIcon = styled.img`
    margin-top: 3%;
    width: 10px;
`

export const SliderValue = styled.div`
display: flex;
    background: rgb(249, 244, 234);
    flex-direction: column;
    width: 90%;
    margin: 10% 5% 5% 5%;
        border-radius: 8px;
`

export const PriceValues = styled.div`
display: flex;
    justify-content: space-between;
    margin: 1% 5% -7% 5%;

`

export const Clear = styled.div`
width: 30%;
    margin: 0 35% 5% 35%;
    height: 35px;
    border: 0.5px solid #000000;
`

export const P = styled.p`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 20px;
text-align: center;
letter-spacing: 2.67px;
text-transform: uppercase;
`