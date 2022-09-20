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
import SetWindowSize from '../../helpers/SetWindowSize'
import HeaderSignIn from '../../Components/Header/HeaderSignIn'
import HeaderSignUp from '../../Components/Header/HeaderSignUp'


export default function HomePage() {
    const signInState: boolean = useSelector((state: any) => state.signinstate.value);
    const signUpState: boolean = useSelector((state: any) => state.signupstate.value);
    const openDishProfile = useSelector((state: any) => state.dishes.openDishProfile);
    let windowSize = SetWindowSize();
    let desktopView = windowSize >= 600 ? true : false;
    return (
        <Div>
            {desktopView && ((signInState && <HeaderSignIn />) || (signUpState && <HeaderSignUp />))}

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
