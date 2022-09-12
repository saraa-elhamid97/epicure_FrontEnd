
export interface ButtonProps {
    underline?: string;
    clicked?: string;
}

export interface SearchInput {
    searchInput: string;
    searchInHeader: boolean;
}

export interface SearchInHeader {
    searchInHeader: boolean;
}

export interface RestaurantInfo {
    img_path: string,
    restaurantName: string,
    chefName?: string,
    status?: string,
    newRes?: boolean,
    popular?: boolean,
    stars?: number,
    dishes?: [],
    heroImg?: string
}
export interface ResInfoToShow {
    chefResComponent: boolean,
    allResPage: boolean,
    restaurantInfo: RestaurantInfo
}

export interface UpdateOpen {
    Open: React.Dispatch<React.SetStateAction<boolean>>,
}

export interface chefResComponent {
    chefResComponent: boolean
}

export interface dishesInRestaurantProfile {
    dishesInRestaurantProfile: boolean
}
export interface allResPage {
    allResPage: boolean
}

export interface DishInfo {
    restaurantName?: string,
    img_path: string,
    dishName: string,
    ingredients: string,
    type_img?: string,
    price: number,
    meal?: string,
}
export interface StarsNumber {
    starsNumber: number
}

export interface DishInfoToShow {
    dishesInRestaurantProfile: boolean,
    dishInfo: DishInfo,
}

export interface ChefInfo {
    name: string,
    img: string,
    new: boolean,
    mostViewed: boolean,
    restaurants?: []
}