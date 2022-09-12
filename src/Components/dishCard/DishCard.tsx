import Reactfrom from 'react'
import { DishInfoToShow } from '../../interfaces'
import { Img, Dishcard, DishName, Ingredients, DishData, DishImg, NoType } from './DishCardStyle'
import SetWindowSize from '../../helpers/SetWindowSize'
import { desktopPrice } from '../../helpers/DesktopFunction'
import { mobilePrice } from '../../helpers/MobileFunctions'
import { useDispatch } from 'react-redux'
import { setClickedDish, setOpenDishProfile } from '../signature_dishes/dishesSlicer'
import { useNavigate } from 'react-router-dom'


export default function DishCard(props: DishInfoToShow) {
    let windowSize = SetWindowSize();
    let desktopView = windowSize >= 600 ? true : false;
    const dispatch = useDispatch();
    const navigate = useNavigate();


    return (
        <Dishcard onClick={() => {
            dispatch(setClickedDish(props.dishInfo));
            if (desktopView) {
                dispatch(setOpenDishProfile(true));
                window.scrollTo(0, 0);
            }
            else {
                navigate('/dishMobile');
                window.scrollTo(0, 0);

            }
        }} dishesInRestaurantProfile={props.dishesInRestaurantProfile}>
            <DishImg dishesInRestaurantProfile={props.dishesInRestaurantProfile} src={props.dishInfo.img_path} alt={props.dishInfo.dishName} />
            <DishData dishesInRestaurantProfile={props.dishesInRestaurantProfile}>
                <DishName>{props.dishInfo.dishName}</DishName>
                <Ingredients>{props.dishInfo.ingredients}</Ingredients>
                {(props.dishInfo.type_img == undefined && props.dishesInRestaurantProfile == false) ? <NoType></NoType> : <Img dishesInRestaurantProfile={props.dishesInRestaurantProfile} src={props.dishInfo.type_img} alt={props.dishInfo.dishName} />}
                {desktopView && desktopPrice(props.dishInfo)}
                {!desktopView && mobilePrice(props)}
            </DishData>
        </Dishcard>
    )
}
