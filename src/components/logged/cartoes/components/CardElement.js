import React, { useEffect, useState } from 'react'
import { api } from '../../../../services/api';
import {
    CardContainer,
    CardInfos,
} from './CardElementStyles'

const Cardelement = (props) => {

  

    console.log();
    return (
        <CardContainer>
            <CardInfos>{props.cartao.name}</CardInfos>
            <CardInfos>**** **** **** {props.cartao.digitos}</CardInfos>
            <CardInfos>Limite: R$ {props.cartao.limite} </CardInfos>
            <CardInfos>Data de pagamento: Todo dia {props.cartao.dataDePagamento} </CardInfos>
            <CardInfos> Tipo: {props.cartao.tipo} </CardInfos>
        </CardContainer>
    );
}

export default Cardelement;
