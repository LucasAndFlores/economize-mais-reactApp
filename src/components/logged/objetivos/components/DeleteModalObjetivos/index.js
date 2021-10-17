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

const DeleteModalObjetivos = (props) => {
    console.log(props)


    const deletedObjetivo = props.deleteobjetivo
    const deletedObjetivoId = props.deleteobjetivo.id
    const autoClose = props.autoclose
    const refreshObjetivos = props.refreshobjetivos


    async function deleteObjetivos () {
        let deletingObjetivos = api.delete(`/objetivos/${deletedObjetivoId}`)
        console.log(deletingObjetivos)
        autoClose()
        refreshObjetivos()
    }

    return reactDom.createPortal (
        <>
            <MainContainer>
                    <ModalStyle>
                            <p>Deseja excluir o objetivo {deletedObjetivo.objetivo}, no valor de {deletedObjetivo.alvo} ? </p>

                            <LineButtons>
                                <YesButton type="button" onClick={() => deleteObjetivos()}> Sim </YesButton>
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

export default DeleteModalObjetivos;
