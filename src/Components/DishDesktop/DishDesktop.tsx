import React from 'react'
import { useDispatch } from 'react-redux';
import DishProfile from '../DishProfile/DishProfile';
import { setOpenDishProfile } from '../signature_dishes/dishesSlicer';
import { Modal, Div, DishContainer, CloseBtn, X_icon } from './DishDesktopStyle'


export default function DishDesktop() {
    const dispatch = useDispatch();
    return (
        <Div>
            <Modal></Modal>
            <DishContainer>
                <CloseBtn onClick={() => { dispatch(setOpenDishProfile(false)); }}>
                    <X_icon src="Images/x.svg" alt="close icon" />
                </CloseBtn>
                <DishProfile />
            </DishContainer>
        </Div>
    )
}
