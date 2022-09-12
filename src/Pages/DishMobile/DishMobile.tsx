import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { X_icon } from '../../Components/DishDesktop/DishDesktopStyle';
import DishProfile from '../../Components/DishProfile/DishProfile';
import { setOpenDishProfile } from '../../Components/signature_dishes/dishesSlicer';
import { CloseBtn, DishContainer } from './DishMobileStyle';
import { Line } from '../../Components/DishProfile/DishProfileStyle'
import Footer from '../../Components/Footer/Footer';

export default function DishMobile() {
    const navigate = useNavigate();
    return (
        <DishContainer>
            <CloseBtn onClick={() => { navigate(-1); }}>
                <X_icon src="Images/x.png" alt="close icon" />
            </CloseBtn>
            <DishProfile />
            <Line></Line>
            <Footer />

        </DishContainer>
    )
}
