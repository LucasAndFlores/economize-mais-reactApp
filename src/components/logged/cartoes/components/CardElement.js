import React from 'react';
import {
    CardContainer,
    CardInfos,
} from './CardElementStyles'

const Cardelement = () => {
    return (
        <CardContainer>
            <CardInfos>Nubank</CardInfos>
            <CardInfos>**** **** **** 4589</CardInfos>
            <CardInfos>Limite: R$ 1.000 </CardInfos>
            <CardInfos>Data de pagamento: Todo dia 5 </CardInfos>
            <CardInfos> Tipo: Crédito </CardInfos>
        </CardContainer>
    );
}

export default Cardelement;
