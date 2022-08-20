import React from 'react'
import { Div, Img } from '../../LayoutStyle'
import { TypeContainer, Type, TypeData, IconsMeaning } from './TypesStyle'

export default function Types() {
    return (
        <TypeContainer>
            <IconsMeaning>THE MEANING OF OUR ICONS:</IconsMeaning>
            <TypeData>
                <Div>
                    <Img src="Images/SpicyBig.svg" alt="spicy" />
                    <Type>Spicy</Type>
                </Div>
                <Div>
                    <Img src="Images/VegetarianBig.svg" alt="spicy" />
                    <Type>Vegetarian</Type>
                </Div>
                <Div>
                    <Img src="Images/VeganBig.svg" alt="spicy" />
                    <Type>Vegan</Type>
                </Div>
            </TypeData>
        </TypeContainer>
    )
}
