import React, { useState } from 'react'
import { HeroContainer, SearchBox, SearchBar, SearchInput, EpicureDef, SearchContainer } from './HeroStyle'
import { Search_icon } from '../Header/searchHeader/SearchStyle'
import { Div } from '../../LayoutStyle'
import SearchResults from '../SearchResults/SearchResults';



export default function Hero() {
    const [updatedSearch, setUpdatedSearch] = useState('');
    return (
        <HeroContainer>
            <SearchContainer>
                <SearchBox>
                    <EpicureDef>Epicure works with the top chef restaurants in Tel Aviv</EpicureDef>
                    <SearchBar>
                        <Search_icon src="Images/Search.jpg" alt="close icon" />
                        <SearchInput type="text" id="search" name="search" placeholder='Search for restaurant cuisine, chef' onChange={(event) => setUpdatedSearch(event.target.value)} />
                    </SearchBar>
                </SearchBox>
                {updatedSearch !== '' && <SearchResults searchInput={updatedSearch} searchInHeader={false} />}
            </SearchContainer>
        </HeroContainer>
    )
}
