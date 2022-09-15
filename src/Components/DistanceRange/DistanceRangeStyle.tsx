import styled from "styled-components";

export const DistanceValue = styled.div`
display: flex;
    justify-content: space-between;
    margin: 1% 5% -7% 5%;
`

export const DistanceRangeContainer = styled.div`
    position: absolute;
    width: 25%;
    z-index: 2;
    background: #FFFFFF;
    top: 267px;
    left: 38.5%;
    text-align: center;
`

export const Distance = styled.div`
    display: flex;
    gap: 2px;
`

export const Location = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 20px;
`

export const Km = styled(Location)``
export const SelectedLocation = styled(Location)``

