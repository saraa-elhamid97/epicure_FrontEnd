import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import { MaxDistance } from '../../constants';
import { SliderWrapper, Clear, P, SelectedRange, SliderValue } from '../PriceRange/PriceRangeStyle';
import { Div } from '../../LayoutStyle';
import { Distance, DistanceRangeContainer, DistanceValue, Km, Location, SelectedLocation } from './DistanceRangeStyle';

const CustomizedSlider = styled(Slider)`
color: #97979780;
width: 90%;
    margin: 0 5%;

  & .MuiSlider-thumb {
    color: black;
  } 
`;

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
