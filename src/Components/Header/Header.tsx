import React, { useState } from 'react'
import SearchHeader from './searchHeader/SearchHeader'
import MobileHeader from './mobileHeader/MobileHeader'
import { SearchBar, SearchInput, Search_icon, LeftHeader, Epicure, Chefs, Restaurants } from './HeaderStyle'
import { Button, Div } from '../../LayoutStyle'
import { useNavigate } from 'react-router-dom';
import SetWindowSize from '../../helpers/SetWindowSize'
import { RightHeader, HeaderContainer, Logo_icon, Bag_icon, User_icon } from './mobileHeader/MobileHeaderStyle'
import { useDispatch, useSelector } from 'react-redux'
import SearchResults from '../SearchResults/SearchResults'
import { openSearch } from './openSearchSlicer'





export default function Header() {
    //const [openSearch, setOpenSearch] = useState(false);
    const [underline, setUnderline] = useState('');
    let windowSize = SetWindowSize();
    let desktopView = windowSize >= 600 ? true : false;
    const [updatedSearch, setUpdatedSearch] = useState('');
    const open_Search = useSelector((state: any) => state.openSearch.value);
    const dispatch = useDispatch();

    const navigate = useNavigate();



    function navigateToRelativePage(pageName: string) {
        if (pageName === 'restaurants') navigate('/restaurantsPage');
        if (pageName === 'home') navigate('/');
        if (pageName === 'chefs') navigate('/chefsPage');
        window.scrollTo(0, 0);

    }
    return (
        <Div>
            {!desktopView && <MobileHeader />}
            {desktopView &&
                (
                    <HeaderContainer id='myID' style={{ maxWidth: '1440px', margin: 'auto' }}>
                        <LeftHeader>
                            <Div>
                                <Button onClick={() => {
                                    navigateToRelativePage('home');
                                    setUnderline('');
                                }}><Logo_icon src="Images/Logo.jpg" alt="logo" /></Button>
                            </Div>
                            <Epicure onClick={() => {
                                navigateToRelativePage('home');
                                setUnderline('');
                            }}>EPICURE</Epicure>
                            <Restaurants underline={underline} onClick={() => {
                                navigateToRelativePage('restaurants');
                                dispatch(openSearch(false));
                                //setOpenSearch(false);
                                setUnderline('res');
                            }}>Restaurants</Restaurants>
                            <Chefs underline={underline} onClick={() => {
                                navigateToRelativePage('chefs');
                                dispatch(openSearch(false));
                                //setOpenSearch(false);
                                setUnderline('chefs')
                            }}>Chefs</Chefs>
                        </LeftHeader>
                        {(open_Search && !desktopView) && <SearchHeader />}
                        {(open_Search && desktopView) &&
                            <Div>
                                <SearchBar>
                                    <SearchInput type="text" id="search" name="search" placeholder='Search for restaurant cuisine, chef' onChange={(event) => setUpdatedSearch(event.target.value)} />
                                </SearchBar>
                                {updatedSearch !== '' && <SearchResults searchInput={updatedSearch} searchInHeader={true} />}
                            </Div>

                        }

                        <RightHeader>
                            <Button onClick={() => {
                                setUpdatedSearch('');
                                dispatch(openSearch(!open_Search));
                                <SearchHeader />
                            }}><Search_icon src="Images/Search.jpg" alt="search" /></Button>
                            <Button><User_icon src="Images/User.jpg" alt="user" /></Button>
                            <Button><Bag_icon src="Images/Bag.jpg" alt="bag" /></Button>
                        </RightHeader>
                    </HeaderContainer>
                )
            }

        </Div >


    )
}
