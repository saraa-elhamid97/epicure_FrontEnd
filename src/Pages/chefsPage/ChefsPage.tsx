import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { ChefImg } from '../../Components/ChefOfWeek/ChefOfWeekStyle';
import { Line } from '../../Components/DishProfile/DishProfileStyle';
import { ChefInfo } from '../../interfaces';
import { Title, Nav_Bar, ChefName_Img, Chef_Name, ChefsCard, ChefsContainer, AllButton, NewButton, MostViewdButton } from './ChefsPageStyle';
import SetWindowSize from '../../helpers/SetWindowSize'
import HeaderSignIn from '../../Components/Header/HeaderSignIn'
import HeaderSignUp from '../../Components/Header/HeaderSignUp'
import { Div } from '../../LayoutStyle';

export default function ChefsPage() {
    const [bold, setBold] = useState('all');
    const allChefs: ChefInfo[] = useSelector((state: any) => state.chefs.allChefs);
    const [chefsUI, setChefsUI] = useState<ChefInfo[]>(allChefs);
    let windowSize = SetWindowSize();
    let desktopView = windowSize >= 600 ? true : false;
    const signInState: boolean = useSelector((state: any) => state.signinstate.value);
    const signUpState: boolean = useSelector((state: any) => state.signupstate.value);

    function filterChefs(buttonId: string) {
        let filterdChefs = allChefs.filter((chef: ChefInfo) => {
            if (buttonId === 'all') return allChefs;
            if (buttonId === 'new') return chef.new === true;
            if (buttonId === 'mostViewed') return chef.mostViewed === true;
        });
        setChefsUI(filterdChefs);
    }

    useEffect(() => {
        chefsUI?.length > 0 ? setChefsUI(chefsUI) : setChefsUI(allChefs)

    })


    return (
        <Div>
            {desktopView && ((signInState && <HeaderSignIn />) || (signUpState && <HeaderSignUp />))}

            <ChefsContainer>
                <Title>Chefs</Title>
                <Nav_Bar>
                    <AllButton clicked={bold} id='all' onClick={() => { filterChefs('all'); setBold('all'); }}>All</AllButton>
                    <NewButton id='new' clicked={bold} onClick={() => { filterChefs('new'); setBold('new'); }}>New</NewButton>
                    <MostViewdButton id='mostViewed' clicked={bold} onClick={() => { filterChefs('mostViewed'); setBold('mostViewed'); }}>Most Viewd</MostViewdButton>

                </Nav_Bar>

                <ChefsCard>

                    {chefsUI.map((element, key) => (
                        <ChefName_Img key={key}>
                            <ChefImg src={element.img} alt={element.name} />
                            <Chef_Name >{element.name}</Chef_Name>
                        </ChefName_Img>
                    ))}

                </ChefsCard>

                <Line></Line>

            </ChefsContainer>
        </Div>

    )
}
