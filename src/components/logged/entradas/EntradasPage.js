import React from 'react';
import MenuLateral from '../../../shared/components/logged/menuLateral';
import EntradasCard from '../entradas/EntradasCard';

import {
    MasterContainer,


} from '../entradas/EntradasPageStyle'

import controleFinanceiro from '../../../shared/img/controle-financeiro.jpg'
import budget from '../../../shared/img/budget 1.png'

const EntradasPage = () => {
    return (
        <MasterContainer>
            <MenuLateral />


            <EntradasCard />

        </MasterContainer>
    );
}

export default EntradasPage;
