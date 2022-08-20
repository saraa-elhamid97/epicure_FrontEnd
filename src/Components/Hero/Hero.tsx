import React from 'react'
import { HeroContainer, SearchBox, SearchBar, SearchInput, EpicureDef } from './HeroStyle'
import { Search_icon } from '../Header/searchHeader/SearchStyle'


export default function Hero() {
    return (
        <HeroContainer>
            <SearchBox>
                <EpicureDef>Epicure works with the top chef restaurants in Tel Aviv</EpicureDef>
                <SearchBar>
                    <Search_icon src="Images/Search.jpg" alt="close icon" />
                    <SearchInput type="text" id="search" name="search" placeholder='Search for restaurant cuisine, chef' />
                </SearchBar>
            </SearchBox>

        </HeroContainer>
    )
}
