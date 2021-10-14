import React from 'react';
import {
    CardContainer,
    CardInfos,
} from './CardElementStyles'

const Cardelement = ({params, state, fnstate}) => {

    console.log(state);
    return (
        <CardContainer>
            <CardInfos>{state}</CardInfos>
            <CardInfos>**** **** **** 4589</CardInfos>
            <CardInfos>Limite: R$ 1.000 </CardInfos>
            <CardInfos>Data de pagamento: Todo dia 5 </CardInfos>
            <CardInfos> Tipo: Crédito </CardInfos>
        </CardContainer>
    );
}

export default Cardelement;
