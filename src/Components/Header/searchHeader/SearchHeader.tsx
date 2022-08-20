import React from 'react'
import { UpdateOpen } from '../../../interfaces';
import { SearchContainer, Search, SearchInput, Top, SearchBar, Search_icon, CloseBtn } from './SearchStyle'
import { X_icon } from '../hamburHeader/HamburStyle'
import { Break } from '../../../LayoutStyle'




export default function SearchHeader(props: UpdateOpen) {
    return (
        <SearchContainer>
            <Top>
                <CloseBtn onClick={() => { props.Open(false) }}>
                    <X_icon src="Images/x.png" alt="close icon" />
                </CloseBtn>
                <Search>Search</Search>
            </Top>
            <Break />
            <SearchBar>
                <Search_icon src="Images/Search.jpg" alt="close icon" />
                <SearchInput type="text" id="search" name="search" placeholder='Search for restaurant cuisine, chef' />
            </SearchBar>
        </SearchContainer>

    )
}
