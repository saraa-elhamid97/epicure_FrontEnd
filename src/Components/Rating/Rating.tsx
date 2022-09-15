import React, { useState } from 'react'
//import { MaxStars } from '../../constants';
import { Break, Div } from '../../LayoutStyle';
import { P, Clear } from '../PriceRange/PriceRangeStyle';
import Stars from '../Stars/Stars';
import { Form, Input, Label, RatingContainer, StarsContainer, Title } from './RatingStyle';

export default function Rating() {
    let StarsNum: number[] = [1, 2, 3, 4, 5];
    const [clicked, setClicked] = useState([false, false, false, false, false]);


    return (
        <RatingContainer>
            <Title>Rating</Title>
            <Form>
                {StarsNum.map((element, key) =>
                    <StarsContainer key={key}>
                        <Input type="checkbox" id={element.toLocaleString()} value={element.toLocaleString()} onChange={() => {
                            let copyClicked = [...clicked];
                            copyClicked[element] = !copyClicked[element];
                            setClicked(copyClicked);
                        }}
                            checked={clicked[element]} />
                        <Label htmlFor={element.toLocaleString()}><Stars starsNumber={element} /></Label><Break />
                    </StarsContainer>
                )}
            </Form>

            {clicked.filter(element => element).length > 0 && <Clear onClick={() => setClicked([false, false, false, false, false])}><P>Clear</P></Clear>}

        </RatingContainer>
    )
}
