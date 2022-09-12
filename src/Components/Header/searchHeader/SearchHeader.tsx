import React, { useState } from 'react'
import { UpdateOpen } from '../../../interfaces';
import { SearchContainer, Search, SearchInput, Top, SearchBar, Search_icon, CloseBtn } from './SearchStyle'
import { X_icon } from '../hamburHeader/HamburStyle'
import SearchResults from '../../SearchResults/SearchResults';
import { Break } from '../../../LayoutStyle';
import { useDispatch } from 'react-redux';
import { openSearch } from '../openSearchSlicer';




export default function SearchHeader() {
    const [updatedSearch, setUpdatedSearch] = useState('');
    const dispatch = useDispatch();


    return (
        <SearchContainer>
            <Top>
                <CloseBtn onClick={() => { dispatch(openSearch(false)); }}>
                    <X_icon src="Images/x.png" alt="close icon" />
                </CloseBtn>
                <Search>Search</Search>
            </Top>
            <Break />
            <SearchBar>
                <Search_icon src="Images/Search.jpg" alt="close icon" />
                <SearchInput type="text" id="search" name="search" placeholder='Search for restaurant cuisine, chef' onChange={(event) => setUpdatedSearch(event.target.value)} />
            </SearchBar>
            {updatedSearch !== '' && <SearchResults searchInput={updatedSearch} searchInHeader={true} />}

        </SearchContainer>

    )
}
