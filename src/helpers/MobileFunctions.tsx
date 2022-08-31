import Slider from 'react-slick'
import { settings } from '../constants'
import RestaurantCard from '../Components/restaurantCard/RestaurantCard'
import { Img } from '../LayoutStyle'
import { Line, Price, PriceTag } from '../Components/dishCard/DishCardStyle'
import { DishInfoToShow, RestaurantInfo, DishInfo } from '../interfaces'
import DishCard from '../Components/dishCard/DishCard';
import { useSelector } from 'react-redux'



export function MobileChefRes() {
    const allrestaurants: RestaurantInfo[] = useSelector((state: any) => state.restaurants.allRestaurants);
    return <Slider {...settings}>
        {allrestaurants.filter(element => element.chefName === 'Yossi Shitrit').map((element, key) =>
            <RestaurantCard key={key} chefResComponent={true} allResPage={false} restaurantInfo={{ img_path: element.img_path, restaurantName: element.restaurantName, chefName: element.chefName }} />
        )}        </Slider>
}

export function mobilePrice(props: DishInfoToShow) {
    return <PriceTag>
        <Img src="Images/shekel.svg" alt="shekel icon" />
        <Price>{props.dishInfo.price}</Price>
        {props.dishesInRestaurantProfile && <Line></Line>}
    </PriceTag>
}

export function MobilePopRes() {
    const allrestaurants: RestaurantInfo[] = useSelector((state: any) => state.restaurants.allRestaurants);
    return <Slider {...settings}>
        {allrestaurants.filter(element => element.popular).map((element, key) =>
            <RestaurantCard key={key} chefResComponent={false} allResPage={false} restaurantInfo={{ img_path: element.img_path, restaurantName: element.restaurantName, chefName: element.chefName, stars: element.stars, status: element.status, dishes: element.dishes }} />
        )}

    </Slider>
}

export function MobileDishes() {
    const dishes: DishInfo[] = useSelector((state: any) => state.dishes.allDishes);
    return <Slider {...settings}>
        {dishes.slice(0, 5).map((element, key) =>
            <DishCard key={key} dishesInRestaurantProfile={false} dishInfo={{ img_path: element.img_path, dishName: element.dishName, ingredients: element.ingredients, type_img: element.type_img, price: element.price }} />
        )}
    </Slider>
}