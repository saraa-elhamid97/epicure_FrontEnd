
export interface ButtonProps {
    underline?: string;
    clicked?: string;
}

export interface RestaurantInfo {
    img_path: string,
    restaurantName: string,
    chefName?: string,
    status?: string,
    newRes?: boolean,
    popular?: boolean,
    stars?: number,
    dishes?: []
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
export interface allResPage {
    allResPage: boolean
}

export interface DishInfo {
    restaurantName?: string,
    img_path: string,
    dishName: string,
    ingredients: string,
    type_img: string,
    price: number,
    meal?: string,
}
export interface StarsNumber {
    starsNumber: number
}