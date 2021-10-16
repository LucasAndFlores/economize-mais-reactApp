import React from 'react';
import { api } from '../../../../../services/api';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
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

    const deteleCardInfo = {
 
        digitos: props.cartao.digitos,
    }

    const deleteCardId = props.cartao.id
    const getCartoes = props.getCartoes

    const isOpen = props.open

    const autoClose = props.setshow


    if (isOpen === false) {
        return null
    }

    async function deleteCard() {
        let response = await api.delete(`cartoes/${deleteCardId}`)
        autoClose();
        getCartoes()
    }

    function abortDelete() {
        autoClose()
    }


    return reactDom.createPortal(
        <>
            <MainContainer>
                <ModalStyle>

                    <p>Gostaria de excluir o cartão com final {deteleCardInfo.digitos} ? </p>
                    <LineButtons>
                        <YesButton onClick={() => deleteCard()} type="button"> Sim </YesButton>
                        <NoButton onClick={() => abortDelete()} type="button"> Não </NoButton>
                    </LineButtons>

                </ModalStyle>
                <CloseModal onClick={() => abortDelete()}><CloseOutline size="20" /></CloseModal>
            </MainContainer>
        </>,
        document.getElementById('portal')
    );
}

export default DeleteModal;
