import React, { useState } from 'react'
import HamburHeader from '../hamburHeader/HamburHeader';
import SearchHeader from '../searchHeader/SearchHeader'
import { HeaderContainer, Hambur_icon, Logo_icon, Bag_icon, User_icon, RightHeader } from './MobileHeaderStyle'
import { Button, Div } from '../../../LayoutStyle'
import { Search_icon } from '../searchHeader/SearchStyle'
import { useNavigate } from 'react-router-dom';






export default function Header() {
    const [openSearch, setOpenSearch] = useState(false);
    const [openHambur, setOpenHambur] = useState(false);


    const navigate = useNavigate();

    function navigateToHomePage() {
        navigate('/');
        window.scrollTo(0, 0);
    }

    return (
        <Div>
            {openSearch && <SearchHeader Open={setOpenSearch} />}
            {openHambur && <HamburHeader Open={setOpenHambur} />}
            {!openHambur && !openSearch &&
                (
                    <HeaderContainer id='myID'>
                        <Div>
                            <Button onClick={() => setOpenHambur(true)}> <Hambur_icon src="Images/HAMBUR.jpg" alt="hambur" /></Button>
                        </Div>
                        <Div>
                            <Button onClick={() => navigateToHomePage()}><Logo_icon src="Images/Logo.jpg" alt="logo" /></Button>
                        </Div>
                        <RightHeader>
                            <Button onClick={() => setOpenSearch(true)}><Search_icon src="Images/Search.jpg" alt="search" /></Button>
                            <Button><User_icon src="Images/User.jpg" alt="user" /></Button>
                            <Button><Bag_icon src="Images/Bag.jpg" alt="bag" /></Button>
                        </RightHeader>
                    </HeaderContainer>
                )
            }

        </Div>


    )
}
