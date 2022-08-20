import React from 'react'
import AboutUsButtom from '../../Components/aboutUsBottom/AboutUsButtom'
import ChefOfWeek from '../../Components/ChefOfWeek/ChefOfWeek'
import ChefRestaurants from '../../Components/chefRestaurants/ChefRestaurants'
import Hero from '../../Components/Hero/Hero'
import PopularRestaurants from '../../Components/popular_restaurant/PopularRestaurants'
import SignatureDishes from '../../Components/signature_dishes/SignatureDishes'
import Types from '../../Components/types/Types'
import { HomePageContainer } from './HomePageStyle'

export default function HomePage() {
    return (
        <HomePageContainer>
            <Hero />
            <PopularRestaurants />
            <SignatureDishes />
            <Types />
            <ChefOfWeek />
            <ChefRestaurants />
            <AboutUsButtom />
        </HomePageContainer>
    )
}
