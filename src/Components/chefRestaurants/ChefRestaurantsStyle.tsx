import styled from "styled-components";
import { DesktopRes, PopRes } from "../popular_restaurant/PopularRestaurantsStyle";

export const ChefRes = styled(PopRes)`
@media (min-width: 600px) {
    text-align: left;
    padding-left:0;
}
`

export const RestaurantsContainer = styled.div`
@media (min-width: 600px) {
margin: 0 8.8%;
}
`

export const DesktopChefRes = styled(DesktopRes)`
    margin: 0;
`