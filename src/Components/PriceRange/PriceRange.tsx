import React, { useState } from 'react'
import { PriceValues, SliderValue, ShekelIcon, Min, Max, Range, SelectedRange, SliderWrapper, PriceRangeContainer, Clear, P } from './PriceRangeStyle'
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import { MinPrice, MaxPrice } from '../../constants';
import { Div } from '../../LayoutStyle';

const CustomizedSlider = styled(Slider)`
color: #97979780;
width: 90%;
    margin: 0 5%;

  & .MuiSlider-thumb {
    color: black;
  } 
`;

export default function PriceRange() {
    const [range, SetRange] = useState<number[]>([MinPrice, MaxPrice]);


    return (
        <PriceRangeContainer>
            <SelectedRange>Price Range Selected</SelectedRange>
            <Range>
                <Min>
                    <ShekelIcon src="Images/shekel.svg" alt="shekel icon" />
                    <Div>{MinPrice}</Div>
                </Min>
                <Div>-</Div>
                <Max>

                    <ShekelIcon src="Images/shekel.svg" alt="shekel icon" />
                    <Div>{MaxPrice}</Div>
                </Max>
            </Range>

            <SliderValue>
                <PriceValues>
                    <Min>
                        <ShekelIcon src="Images/shekel.svg" alt="shekel icon" />
                        <Div>{range[0]}</Div>
                    </Min>
                    <Max>

                        <ShekelIcon src="Images/shekel.svg" alt="shekel icon" />
                        <Div>{range[1]}</Div>
                    </Max>

                </PriceValues>
                <SliderWrapper>
                    <CustomizedSlider
                        value={range}
                        onChange={(e, newRange) => SetRange(newRange as number[])}
                        getAriaLabel={() => 'Tempratue range'}
                        min={MinPrice}
                        max={MaxPrice} />
                </SliderWrapper>
            </SliderValue>
            <Clear onClick={() => SetRange([MinPrice, MaxPrice])}><P>Clear</P></Clear>
        </PriceRangeContainer>
    )
}
