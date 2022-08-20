import React from 'react'
import { ChWeek, ChefImg, ChefName, ChefNameImg, ChefBio, ChWeekContainer, ChefInfo } from './ChefOfWeekStyle'

export default function ChefOfWeek() {
    return (
        <ChWeekContainer>
            <ChWeek>Chef of the week:</ChWeek>
            <ChefInfo>
                <ChefNameImg>
                    <ChefImg src="Images/yossi.svg" alt="Yossi Shitrit" />
                    <ChefName>Yossi Shitrit</ChefName>
                </ChefNameImg>
                <ChefBio>
                    Chef Yossi Shitrit has been living and
                    breathing his culinary dreams for more than two decades,
                    including running the kitchen in his first restaurant,
                    the fondly-remembered Violet, located in Moshav  Udim.
                    Shitrit's creativity and culinary  acumen born of long
                    experience  are expressed in the every detail of each
                    and every dish.
                </ChefBio>
            </ChefInfo>
        </ChWeekContainer>
    )
}
