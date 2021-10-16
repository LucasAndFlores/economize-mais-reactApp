import React, { useEffect, useState } from 'react'
import { api } from '../../../../services/api';
import {
    CardContainer,
    CardInfos,
    RemoveButton
} from './CardElementStyles'

const Cardelement = (props) => {

    async function deleteCard() {
        await api.delete(`cartoes/${props.cartao.id}`);
        props.getCartoes();
        
    }

    async function setCartaoDetalhes() {
        props.setCartao(props.cartao);
        
    }

    console.log();
    return (
        <CardContainer>
            <RemoveButton onClick={deleteCard} >apagar</RemoveButton>    
            <RemoveButton onClick={setCartaoDetalhes} >editar</RemoveButton>
            <CardInfos>{props.cartao.name}</CardInfos>
            <CardInfos>**** **** **** {props.cartao.digitos}</CardInfos>
            <CardInfos>Limite: R$ {props.cartao.limite} </CardInfos>
            <CardInfos>Data de pagamento: Todo dia {props.cartao.dataDePagamento} </CardInfos>
            <CardInfos> Tipo: {props.cartao.tipo} </CardInfos>
        </CardContainer>
    );
}

export default Cardelement;
