import React from 'react'
import { FooterContainer, FooterInfo } from './FooterStyle';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { isClicked } from '../Header/hamburHeader/footerClickedSlicer';


export default function Footer() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <FooterContainer>
            <FooterInfo onClick={() => { navigate('/contactUs'); dispatch(isClicked(true)) }}>Contact Us</FooterInfo>
            <FooterInfo onClick={() => { navigate('/TermOfUse'); dispatch(isClicked(true)) }}>Term of Use</FooterInfo>
            <FooterInfo onClick={() => { navigate('/PrivacyPolicy'); dispatch(isClicked(true)) }}>Privacy Policy</FooterInfo>
        </FooterContainer>
    )
}
