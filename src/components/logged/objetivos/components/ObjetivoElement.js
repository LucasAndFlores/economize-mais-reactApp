import React, { useEffect, useState } from 'react'
import { api } from '../../../../services/api';
import {
    GoalCardOne,
    DivCard,
    IdOne,
    Paragraph
} from './ObjetivoElementStyles'

const Objetivoelement = (props) => {

    async function deleteOjetivo() {
        await api.delete(`objetivos/${props.objetivo.id}`);
        props.getObjetivos();
        
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

export default Objetivoelement;