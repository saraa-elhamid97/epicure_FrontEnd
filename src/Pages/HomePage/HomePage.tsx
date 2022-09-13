import { useSelector } from 'react-redux'
import AboutUsButtom from '../../Components/aboutUsBottom/AboutUsButtom'
import ChefOfWeek from '../../Components/ChefOfWeek/ChefOfWeek'
import ChefRestaurants from '../../Components/chefRestaurants/ChefRestaurants'
import DishDesktop from '../../Components/DishDesktop/DishDesktop'
import Hero from '../../Components/Hero/Hero'
import PopularRestaurants from '../../Components/popular_restaurant/PopularRestaurants'
import SignatureDishes from '../../Components/signature_dishes/SignatureDishes'
import Types from '../../Components/types/Types'
import { Div } from '../../LayoutStyle'
import { HomePageContainer } from './HomePageStyle'


export default function HomePage() {
    const openDishProfile = useSelector((state: any) => state.dishes.openDishProfile);
    return (
        <Div>
            <HomePageContainer>
                <Hero />
                <PopularRestaurants />
                <SignatureDishes />
                <Types />
                <ChefOfWeek />
                <ChefRestaurants />
                <AboutUsButtom />
                {openDishProfile && <DishDesktop />}
            </HomePageContainer>

        </Div>
    )
}
