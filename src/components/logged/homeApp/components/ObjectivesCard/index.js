import React, { useEffect, useState, useCallback } from 'react'
import { api } from '../../../../../services/api';
import {TargetArrow} from '@styled-icons/fluentui-system-filled/TargetArrow';
import {
    GoalCardOne,
    IdOne,
    Paragraph,
    ContainerObjetivosHome,
    TitleCategory

} from './styles'

const ObjetivoElement = () => {

    const fkUsuarioId = localStorage.getItem("user_id")

    const [objetivosHome, setobjetivosHome] = useState([])

    const apiGetobjetivos = useCallback( async () => {
        let response = await api.get(`objetivos/${fkUsuarioId}`)
        setobjetivosHome(response.data)
    },[])

    useEffect(() => {
        apiGetobjetivos()
    },[])


    return (   
        <>
        <TitleCategory> Meus Objetivos </TitleCategory>
            <ContainerObjetivosHome>
                    {objetivosHome.map(objetivo => (
                            <GoalCardOne key={objetivo.id}>
                                    <IdOne> {objetivo.objetivo} </IdOne>
                                    <TargetArrow size="40" />
                                    <Paragraph> R$ {objetivo.alvo} </Paragraph>
                            </GoalCardOne>     
                    ))}
                               
            </ContainerObjetivosHome>
       </>
    );
}

export default ObjetivoElement;