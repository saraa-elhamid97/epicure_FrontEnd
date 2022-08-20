import Slider from 'react-slick'
import { restaurantData, settings, dishData } from '../constants'
import RestaurantCard from '../Components/restaurantCard/RestaurantCard'
import { Img } from '../LayoutStyle'
import { Price, PriceTag } from '../Components/dishCard/DishCardStyle'
import { DishInfo } from '../interfaces'
import DishCard from '../Components/dishCard/DishCard';



export function mobileChefRes() {
    return <Slider {...settings}>
        {restaurantData.filter(element => element.chefName == 'Yossi Shitrit').map(element =>
            <RestaurantCard chefResComponent={true} allResPage={false} restaurantInfo={{ img_path: element.img_path, restaurantName: element.restaurantName, chefName: element.chefName }} />
        )}        </Slider>
}

export function mobilePrice(props: DishInfo) {
    return <PriceTag>
        <Img src="Images/shekel.svg" alt="shekel icon" />
        <Price>{props.price}</Price>
    </PriceTag>
}

export function mobilePopRes() {
    return <Slider {...settings}>
        {restaurantData.map(element =>
            <RestaurantCard chefResComponent={false} allResPage={false} restaurantInfo={{ img_path: element.img_path, restaurantName: element.restaurantName, chefName: element.chefName, stars: element.stars }} />
        )}

    </Slider>
}

export function mobileDishes() {
    return <Slider {...settings}>
        {dishData.map(element =>
            <DishCard img_path={element.img_path} dishName={element.dishName} ingredients={element.ingredients} type_img={element.type_img} price={element.price} />
        )}
    </Slider>
}