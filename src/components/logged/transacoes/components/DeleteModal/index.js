import React from 'react';
import { api } from '../../../../../services/api';
import {CloseOutline} from '@styled-icons/evaicons-outline/CloseOutline'
import reactDom from 'react-dom';
import {
    MainContainer,
    ModalStyle, 
    LineButtons,
    NoButton,
    YesButton, 
    CloseModal

} from './styles'

const DeleteModal = (props) => {

    const deleteTransactionInfo = {
        loja: props.deleterefference.loja,
        dataTransacao: props.deleterefference.dataTransacao,
        valor: props.deleterefference.valor
    }

    const deleteTransactionId = props.deleterefference.id
    const refreshTransaction = props.refreshtransaction

    const isOpen = props.open

    const autoClose = props.setshow


    if (isOpen === false) {
        return null
    } 

    async function deleteTransaction () {
        let deleteTransaction = await api.delete(`transacoes/${deleteTransactionId}`)
        autoClose()
        refreshTransaction()
    }

     function abortDelete () {
        autoClose()
    }


    return reactDom.createPortal(
        <>
        <MainContainer>
            <ModalStyle>
                
                <p>Gostaria de excluir a transacao {deleteTransactionInfo.loja} feita no dia {deleteTransactionInfo.dataTransacao}, no valor de R$ {deleteTransactionInfo.valor} ? </p>
                <LineButtons>
                <YesButton onClick={() => deleteTransaction()} type="button"> Sim </YesButton>
                <NoButton onClick={() => abortDelete()} type="button"> Não </NoButton>
                </LineButtons>

            </ModalStyle>
            <CloseModal onClick={() => abortDelete()}><CloseOutline size="20"/></CloseModal>
        </MainContainer>
        </>,
        document.getElementById('portal')
    );                                                                          
}

export default DeleteModal;
