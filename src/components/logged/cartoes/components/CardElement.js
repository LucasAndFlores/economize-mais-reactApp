import React, { useCallback, useEffect, useState } from 'react'
import { api } from '../../../../services/api';
import {
    CardContainer,
    CardInfos,
    RemoveButton,
    EditButton,
    ButtonsContainer
} from './CardElementStyles'

import remove from '../../../../shared/img/remove.png'
import edit from '../../../../shared/img/edit.png'
import { Edit } from '@styled-icons/fa-solid/Edit'
import { Trash } from '@styled-icons/fa-solid/Trash'

import DeleteModal from './DeleteModal'
const Cardelement = (props) => {
    const [show, setShow] = useState(false)
    const [operation, setOperation] = useState(false)

    function autoClose() {
        setShow(false)
    }


    const handleShow = useCallback(() => {
        setShow(!show)
    }, [show])

    async function deleteCard() {
        handleShow();
        setOperation(true);
        //await api.delete(`cartoes/${props.cartao.id}`);
        //rops.getCartoes();

    }

    async function setCartaoDetalhes() {
        props.setCartao(props.cartao);

    }

    console.log();
    return (
        <CardContainer>
            <ButtonsContainer>
                <RemoveButton title="Apagar Cartão" onClick={deleteCard} ><Trash size="20" /></RemoveButton>
                <EditButton title="Editar Cartão" onClick={setCartaoDetalhes} ><Edit size="20" /></EditButton>
                {show && operation && <DeleteModal cartao={props.cartao} setshow={autoClose} getCartoes={props.getCartoes} />}
            </ButtonsContainer>
            <CardInfos>{props.cartao.name}</CardInfos>
            <CardInfos>**** **** **** {props.cartao.digitos}</CardInfos>
            <CardInfos>Limite: R$ {props.cartao.limite} </CardInfos>
            <CardInfos>Data de pagamento: Todo dia {props.cartao.dataDePagamento} </CardInfos>
            <CardInfos> Tipo: {props.cartao.tipo} </CardInfos>
        </CardContainer>
    );
}

export default Cardelement;
