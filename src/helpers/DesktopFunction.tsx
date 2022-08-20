import { DesktopChefRes } from '../Components/chefRestaurants/ChefRestaurantsStyle'
import { restaurantData, dishData } from '../constants'
import RestaurantCard from '../Components/restaurantCard/RestaurantCard'
import { ShekelDesktop, Line, DeskPrice, Price } from '../Components/dishCard/DishCardStyle'
import { DishInfo } from '../interfaces'
import { DesktopRes } from '../Components/popular_restaurant/PopularRestaurantsStyle'
import { DesktopDishes } from '../Components/signature_dishes/SignatureDishesStyle';
import DishCard from '../Components/dishCard/DishCard';



export function desktopChefRes() {
    return <DesktopChefRes>
        {restaurantData.filter(element => element.chefName == 'Yossi Shitrit').map(element =>
            <RestaurantCard chefResComponent={true} allResPage={false} restaurantInfo={{ img_path: element.img_path, restaurantName: element.restaurantName, chefName: element.chefName }} />
        )}
    </DesktopChefRes>
}

export function desktopPrice(props: DishInfo) {
    return <DeskPrice>
        <Line></Line>
        <ShekelDesktop src="Images/shekel.svg" alt="shekel icon" />
        <Price>{props.price}</Price>
        <Line></Line>
    </DeskPrice>
}

export function desktopPopRes() {
    let popularRes = restaurantData.filter(element => element.popular);
    return <DesktopRes>
        {popularRes.slice(0, 3).map(element =>
            <RestaurantCard chefResComponent={false} allResPage={false} restaurantInfo={{ img_path: element.img_path, restaurantName: element.restaurantName, chefName: element.chefName, stars: element.stars }} />
        )}
    </DesktopRes>

}

export function desktopDishes() {
    return <DesktopDishes>
        {dishData.slice(0, 3).map(element =>
            <DishCard img_path={element.img_path} dishName={element.dishName} ingredients={element.ingredients} type_img={element.type_img} price={element.price} />
        )}
    </DesktopDishes>

}