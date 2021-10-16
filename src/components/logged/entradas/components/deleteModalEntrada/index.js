import React from 'react';
import reactDom from 'react-dom';
import {CloseOutline} from '@styled-icons/evaicons-outline/CloseOutline'
import { api } from '../../../../../services/api';
import {
    MainContainer,
    ModalStyle,
    CloseModal,
    LineButtons,
    NoButton,
    YesButton
} from './styles'

const DeleteModalEntrada = (props) => {


    const deletedEntrada = props.deleteentradas
    const deletedEntradaId = props.deleteentradas.id
    const autoClose = props.autoclose
    const refreshEntradas = props.refreshentrada


    async function deleteTransaction () {
        let deletingTransaction = api.delete(`/entradas/${deletedEntradaId}`)
        console.log(deletingTransaction)
        autoClose()
        refreshEntradas()
    }

    return reactDom.createPortal (
        <>
            <MainContainer>
                    <ModalStyle>
                            <p>Deseja excluir a entrada {deletedEntrada.nome}, no valor de {deletedEntrada.valor}, do dia {deletedEntrada.data} ? </p>

                            <LineButtons>
                                <YesButton type="button" onClick={() => deleteTransaction()}> Sim </YesButton>
                                <NoButton type="button" onClick={() => autoClose()} > Não </NoButton>
                            </LineButtons>
                    </ModalStyle>
                <CloseModal type="button" onClick={() => autoClose()}>
                    <CloseOutline size="20"/>
                </CloseModal>
            </MainContainer>
        </>,
        document.getElementById("portal")
    );
}

export default DeleteModalEntrada;
