import React from 'react'
import Footer from '../../Footer/Footer';
import { UpdateOpen } from '../../../interfaces';
import { HamburInfo, CloseBtn, HamburContainer, X_icon, Line } from './HamburStyle'
import { Paragraph, Button, Break, Div } from '../../../LayoutStyle'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isClicked } from './footerClickedSlicer';


export default function HamburHeader(props: UpdateOpen) {
    const navigate = useNavigate();
    const is_clicked = useSelector((state: any) => state.footerClicked.value);
    const dispatch = useDispatch();

    function navigateToRelativePage(pageName: string) {
        if (pageName === 'restaurants') navigate('/restaurantsPage');
        else { navigate('/chefsPage'); }
        window.scrollTo(0, 0);

    }




    return (
        <HamburContainer>
            <Div>
                <CloseBtn onClick={() => { props.Open(false) }}>
                    <X_icon src="Images/x.png" alt="close icon" />
                </CloseBtn>
            </Div>
            <Break />
            <HamburInfo>
                <Paragraph onClick={() => {
                    navigateToRelativePage('restaurants');
                    props.Open(false);
                }}>Restaurants</Paragraph>
                <Paragraph onClick={() => {
                    navigateToRelativePage('chefs');
                    props.Open(false);
                }}>Chefs</Paragraph>
            </HamburInfo>
            <Line></Line>
            <Footer />
            {is_clicked && (props.Open(false), dispatch(isClicked(false)))}
        </HamburContainer>
    )
}
