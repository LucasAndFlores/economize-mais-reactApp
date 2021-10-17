import React from 'react';
import { BackgroundContainerStyle } from '../../../shared/styles/styleBackground'
import {
    MainContainerHome, 
    LeftHome,
    RightHome, 
    TableSpent,
    CategorySpent,
    ObjectivesCard,
    SpentbyCard
} from './HomeAppStyles'
import MenuLateral from '../../../shared/components/logged/menuLateral';
import UserBar from '../../../shared/components/logged/UserBar/UserBar';
import TransactionTableHome from './components/transactionsTableHome';
import SpendByType from './components/CardTypeTransaction';
import SpentByCategoria from './components/SpentByCategoria';
import ObjetivoElement from './components/ObjectivesCard';

const Homeapp = () => {



    return (
        <BackgroundContainerStyle>
            <MenuLateral />
            <UserBar />
            <MainContainerHome>
                <LeftHome> 
                    <TableSpent>
                            <TransactionTableHome />
                    </TableSpent>
                    <CategorySpent>
                        <SpentByCategoria />
                    </CategorySpent>
                </LeftHome>
                <RightHome>
                    <ObjectivesCard>
                         <ObjetivoElement />
                    </ObjectivesCard>
                    <SpentbyCard>
                         <SpendByType />
                    </SpentbyCard>
                </RightHome>
                
            </MainContainerHome>  
        </BackgroundContainerStyle>
    );
}

export default Homeapp;
