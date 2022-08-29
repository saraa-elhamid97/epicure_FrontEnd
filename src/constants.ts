import { RestaurantInfo } from './interfaces'
import { DishInfo } from './interfaces'

export const restaurantData: RestaurantInfo[] = [
    {
        img_path: 'Images/claro.svg',
        restaurantName: 'Claro',
        chefName: 'Ran Shmueli',
        stars: 4,
        popular: true,
        status: 'open',
        newRes: false
    },
    {
        img_path: 'Images/Onza.svg',
        restaurantName: 'Onza',
        chefName: 'Yossi Shitrit',
        stars: 2,
        status: 'open',
        newRes: false,
        popular: true

    },
    {
        img_path: 'Images/claro.svg',
        restaurantName: 'Kitchen Market',
        chefName: 'Yossi Shitrit',
        stars: 1,
        status: 'closed',
        newRes: false,
        popular: true

    },
    {
        img_path: 'Images/Onza.svg',
        restaurantName: 'Mashya',
        chefName: 'Yossi Shitrit',
        stars: 4,
        status: 'open',
        newRes: false,
        popular: false

    },
    {
        img_path: 'Images/claro.svg',
        restaurantName: 'Kab Kem',
        chefName: 'Yariv Malili ',
        stars: 3,
        status: 'closed',
        newRes: false,
        popular: true

    },
    {
        img_path: 'Images/Onza.svg',
        restaurantName: 'Messa',
        chefName: 'Aviv Moshe',
        stars: 3,
        status: 'closed',
        newRes: true,
        popular: false

    },
    {
        img_path: 'Images/claro.svg',
        restaurantName: 'Ya Pan',
        chefName: 'Yuval Ben Moshe',
        stars: 2,
        status: 'closed',
        newRes: false,
        popular: false

    },
    {
        img_path: 'Images/Onza.svg',
        restaurantName: 'Tiger Lilly',
        chefName: 'Yanir Green',
        stars: 3,
        status: 'open',
        newRes: true,
        popular: false


    },
]


// export const dishData: DishInfo[] = [
//     {
//         img_path: 'Images/claro.svg',
//         dishName: 'Pad Ki Mao',
//         ingredients: 'Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut',
//         type_img: 'Images/SpicySmall.svg',
//         price: 88,
//     },
//     {
//         img_path: 'Images/Onza.svg',
//         dishName: 'Garbanzo Frito',
//         ingredients: 'Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa',
//         type_img: 'Images/VeganSmall.svg',
//         price: 78,
//     },
//     {
//         img_path: 'Images/claro.svg',
//         dishName: 'Smoked Pizza',
//         ingredients: 'Basil dough, cashew "butter", demi-glace, bison & radish',
//         type_img: 'Images/VegetarianSmall.svg',
//         price: 90,
//     },
//     {
//         img_path: 'Images/Onza.svg',
//         dishName: 'Pad Ki Mao',
//         ingredients: 'Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut',
//         type_img: 'Images/SpicySmall.svg',
//         price: 88,
//     },
// ]


export const chefRes: RestaurantInfo[] = [
    {
        img_path: 'Images/Onza.svg',
        restaurantName: 'Onza'
    },
    {
        img_path: 'Images/claro.svg',
        restaurantName: 'Kitchen Market'
    },
    {
        img_path: 'Images/Onza.svg',
        restaurantName: 'Mashya'
    },


]

export const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
};





export const MaxStars: number = 5;