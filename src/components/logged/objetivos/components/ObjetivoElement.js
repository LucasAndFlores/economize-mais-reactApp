import React, { useEffect, useState } from 'react'
import { api } from '../../../../services/api';
import {AirplaneTicket} from '@styled-icons/material-outlined/AirplaneTicket';
import {
    GoalCardOne,
    DivCard,
    IdOne,
    Paragraph,
    RemoveButton,

} from './ObjetivoElementStyles'

const ObjetivoElement = (props) => {

    async function deleteOjetivo() {
        await api.delete(`objetivos/${props.objetivo.id}`);
        props.getObjetivos();
        console.log(props);
    }

    console.log();
    return (        
        <GoalCardOne>
            {/* <RemoveButton onClick={deleteOjetivo} >apagar</RemoveButton>  */}
            <DivCard>
                <IdOne>{props.objetivo.alvo}</IdOne>
                <Paragraph>{props.objetivo.dataAlvo}</Paragraph>
            </DivCard>
            <DivCard>
                <AirplaneTicket size="40" />
                {/* <IdOne>Férias</IdOne> */}
                <Paragraph>{props.objetivo.objetivo}</Paragraph>
            </DivCard>
        </GoalCardOne>        
    );
}

export default ObjetivoElement;