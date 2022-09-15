import React, { useState } from 'react'
import { MaxDistance } from '../../constants';
import { SliderWrapper, Clear, P, SelectedRange, SliderValue, CustomizedSlider } from '../PriceRange/PriceRangeStyle';
import { Distance, DistanceRangeContainer, DistanceValue, Km, Location, SelectedLocation } from './DistanceRangeStyle';



export default function DistanceRange() {
    const [range, SetRange] = useState<number>(MaxDistance);

    return (
        <DistanceRangeContainer>
            <SelectedRange>Distance</SelectedRange>
            <SliderValue>
                <DistanceValue>
                    <Location>My location</Location>
                    <Distance>
                        <SelectedLocation>{range}</SelectedLocation>
                        <Km>km</Km>
                    </Distance>
                </DistanceValue>
                <SliderWrapper>
                    <CustomizedSlider
                        value={range}
                        onChange={(e, newDistance) => SetRange(newDistance as number)}
                        getAriaLabel={() => 'Tempratue range'}
                        max={MaxDistance} />
                </SliderWrapper>
            </SliderValue>
            {(MaxDistance > range) && <Clear onClick={() => SetRange(MaxDistance)}><P>Clear</P></Clear>}
        </DistanceRangeContainer>
    )
}
