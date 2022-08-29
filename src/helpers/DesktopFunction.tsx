import { DeskChefRes } from '../Components/chefRestaurants/ChefRestaurantsStyle'
import RestaurantCard from '../Components/restaurantCard/RestaurantCard'
import { ShekelDesktop, Line, DeskPrice, Price } from '../Components/dishCard/DishCardStyle'
import { DishInfo, RestaurantInfo } from '../interfaces'
import { DesktopRes } from '../Components/popular_restaurant/PopularRestaurantsStyle'
import { Desktop_Dishes } from '../Components/signature_dishes/SignatureDishesStyle';
import DishCard from '../Components/dishCard/DishCard';
import { useSelector } from 'react-redux'



export function DesktopChefRes() {
    const allrestaurants: RestaurantInfo[] = useSelector((state: any) => state.restaurants.allRestaurants);
    return <DeskChefRes>
        {allrestaurants.filter(element => element.chefName === 'Yossi Shitrit').map((element, key) =>
            <RestaurantCard key={key} chefResComponent={true} allResPage={false} restaurantInfo={{ img_path: element.img_path, restaurantName: element.restaurantName, chefName: element.chefName }} />
        )}
    </DeskChefRes>
}

export function desktopPrice(props: DishInfo) {
    return <DeskPrice>
        <Line></Line>
        <ShekelDesktop src="Images/shekel.svg" alt="shekel icon" />
        <Price>{props.price}</Price>
        <Line></Line>
    </DeskPrice>
}

export function DesktopPopRes() {
    const allrestaurants: RestaurantInfo[] = useSelector((state: any) => state.restaurants.allRestaurants);
    let popularRes = allrestaurants.filter(element => element.popular);
    return <DesktopRes>
        {popularRes.slice(0, 3).map((element, key) =>
            <RestaurantCard key={key} chefResComponent={false} allResPage={false} restaurantInfo={{ img_path: element.img_path, restaurantName: element.restaurantName, chefName: element.chefName, stars: element.stars, status: element.status, dishes: element.dishes }} />
        )}
    </DesktopRes>

}

export function DesktopDishes() {
    const dishes: DishInfo[] = useSelector((state: any) => state.dishes.allDishes);
    return <Desktop_Dishes>
        {dishes.slice(0, 3).map((element, key) =>
            <DishCard key={key} img_path={element.img_path} dishName={element.dishName} ingredients={element.ingredients} type_img={element.type_img} price={element.price} />
        )}
    </Desktop_Dishes>

}