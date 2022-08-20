import React, { useState } from 'react'
import SearchHeader from './searchHeader/SearchHeader'
import MobileHeader from './mobileHeader/MobileHeader'
import { LeftHeader, Epicure, Chefs, Restaurants } from './HeaderStyle'
import { Button, Div } from '../../LayoutStyle'
import { Search_icon } from '../Header/searchHeader/SearchStyle'
import { useNavigate } from 'react-router-dom';
import SetWindowSize from '../../helpers/SetWindowSize'
import { RightHeader, HeaderContainer, Logo_icon, Bag_icon, User_icon } from './mobileHeader/MobileHeaderStyle'





export default function Header() {
    const [openSearch, setOpenSearch] = useState(false);
    const [underline, setUnderline] = useState('');
    let windowSize = SetWindowSize();
    let desktopView = windowSize >= 600 ? true : false;

    const navigate = useNavigate();

    function navigateToHomePage() {
        navigate('/');
        window.scrollTo(0, 0);
    }
    function navigateToRestaurantsPage() {
        navigate('/restaurantsPage')
    }

    return (
        <Div>
            {!desktopView && <MobileHeader />}
            {desktopView &&
                (
                    <HeaderContainer id='myID'>
                        <LeftHeader>
                            <Div>
                                <Button onClick={() => {
                                    navigateToHomePage();
                                    setUnderline('');
                                }}><Logo_icon src="Images/Logo.jpg" alt="logo" /></Button>
                            </Div>
                            <Epicure onClick={() => {
                                navigateToHomePage();
                                setUnderline('');
                            }}>EPICURE</Epicure>
                            <Restaurants underline={underline} onClick={() => {
                                navigateToRestaurantsPage();
                                setOpenSearch(false);
                                setUnderline('res');
                            }}>Restaurants</Restaurants>
                            <Chefs underline={underline} onClick={() => {
                                setUnderline('chefs')
                            }}>Chefs</Chefs>
                        </LeftHeader>
                        <RightHeader>
                            <Button onClick={() => {
                                setOpenSearch(true);
                                <SearchHeader Open={setOpenSearch} />
                            }}><Search_icon src="Images/Search.jpg" alt="search" /></Button>
                            <Button><User_icon src="Images/User.jpg" alt="user" /></Button>
                            <Button><Bag_icon src="Images/Bag.jpg" alt="bag" /></Button>
                        </RightHeader>
                        {openSearch && <SearchHeader Open={setOpenSearch} />}
                    </HeaderContainer>
                )
            }

        </Div >


    )
}
