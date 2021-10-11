import React, { useContext } from 'react';
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
import { AuthContext } from '../../../contexts/auth';

const Homeapp = () => {



    return (
        <BackgroundContainerStyle>
            <MenuLateral />
            <UserBar />
            <MainContainerHome>
                <LeftHome> 
                    <TableSpent>
                        Tabela de gastos
                    </TableSpent>
                    <CategorySpent>
                        Gráfico de gasto por categoria
                    </CategorySpent>
                </LeftHome>
                <RightHome>
                    <ObjectivesCard>
                        Cards de objetivos
                    </ObjectivesCard>
                    <SpentbyCard>
                        Gasto por cartão
                    </SpentbyCard>
                </RightHome>
                
            </MainContainerHome>  
        </BackgroundContainerStyle>
    );
}

export default Homeapp;
