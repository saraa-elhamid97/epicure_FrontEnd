import React, { useState } from 'react'
import HamburHeader from '../hamburHeader/HamburHeader';
import SearchHeader from '../searchHeader/SearchHeader'
import { Container, HeaderContainer, Hambur_icon, Logo_icon, Bag_icon, User_icon, RightHeader } from './MobileHeaderStyle'
import { Button, Div } from '../../../LayoutStyle'
import { Search_icon } from '../searchHeader/SearchStyle'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openSearch } from '../openSearchSlicer';
import HeaderSignIn from '../HeaderSignIn';
import HeaderSignUp from '../HeaderSignUp';
import { setOpenSignIn } from '../SingInStateSlice';





export default function Header() {
    const openHeaderSignIn = useSelector((state: any) => state.signinstate.value);
    const openHeaderSignUp = useSelector((state: any) => state.signupstate.value);
    const [openHambur, setOpenHambur] = useState(false);
    const navigate = useNavigate();
    const open_Search = useSelector((state: any) => state.openSearch.value);
    const dispatch = useDispatch();
    function navigateToHomePage() {
        navigate('/');
        window.scrollTo(0, 0);
    }

    return (
        <Container>
            {open_Search && <SearchHeader />}
            {openHambur && <HamburHeader Open={setOpenHambur} />}
            {openHeaderSignIn && <HeaderSignIn />}
            {openHeaderSignUp && <HeaderSignUp />}
            {!openHambur && !open_Search && !openHeaderSignIn && !openHeaderSignUp &&
                (
                    <HeaderContainer id='myID'>
                        <Div>
                            <Button onClick={() => setOpenHambur(true)}> <Hambur_icon src="Images/HAMBUR.jpg" alt="hambur" /></Button>
                        </Div>
                        <Div>
                            <Button onClick={() => navigateToHomePage()}><Logo_icon src="Images/Logo.jpg" alt="logo" /></Button>
                        </Div>
                        <RightHeader>
                            <Button onClick={() => dispatch(openSearch(true))}><Search_icon src="Images/Search.jpg" alt="search" /></Button>
                            <Button onClick={() => dispatch(setOpenSignIn(true))}><User_icon src="Images/User.jpg" alt="user" /></Button>
                            <Button><Bag_icon src="Images/Bag.jpg" alt="bag" /></Button>
                        </RightHeader>
                    </HeaderContainer>
                )
            }

        </Container>


    )
}
