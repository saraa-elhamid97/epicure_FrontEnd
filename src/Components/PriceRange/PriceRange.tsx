import React, { useState } from 'react'
import { CustomizedSlider, PriceValues, SliderValue, ShekelIcon, Min, Max, Range, SelectedRange, SliderWrapper, PriceRangeContainer, Clear, P } from './PriceRangeStyle'
import { MinPrice, MaxPrice } from '../../constants';
import { Div } from '../../LayoutStyle';



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
                        max={MaxPrice}
                        disableSwap />
                </SliderWrapper>
            </SliderValue>
            {(MinPrice < range[0] || range[1] < MaxPrice) && <Clear onClick={() => SetRange([MinPrice, MaxPrice])}><P>Clear</P></Clear>}
        </PriceRangeContainer>
    )
}
