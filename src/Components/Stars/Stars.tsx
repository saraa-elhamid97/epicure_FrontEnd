import { MaxStars } from '../../constants';
import { Div } from '../../LayoutStyle';
import { Star } from './StarsStyle';
import { StarsNumber } from '../../interfaces'



export default function Stars(props: StarsNumber) {
    let resStars: string[] = [''];
    let lastIndex = 0;

    for (let index = 0; index < props.starsNumber; index++) {
        resStars[index] = 'Images/fullStar.svg';
        lastIndex++;
    }

    for (let i = lastIndex; i < MaxStars; i++) {
        resStars[i] = 'Images/emptyStar.svg';

    }


    return (
        <Star>
            {
                resStars.map((element, key) =>
                    <Div key={key}><img src={element} alt="stars" /></Div>
                )
            }
        </Star>
    )
}
