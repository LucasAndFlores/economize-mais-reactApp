import React, {useCallback, useEffect, useState } from 'react'
import {TargetArrow} from '@styled-icons/fluentui-system-filled/TargetArrow';
import DeleteModalObjetivos from './DeleteModalObjetivos/index'
import {
    GoalCardOne,
    IdOne,
    Paragraph,
    ContainerCards,
    FormContainer,
    GoalContainer,
    GoalTitle,
    RemoveButton

} from './ObjetivoElementStyles'

const ObjetivoElement = (props) => {

    const objetivos = props.objetivos
    const refreshObjetivos = props.getObjetivos

    const [selectedObjetivo, setSelectedObjetivo ] = useState()
    const [show, setShow] = useState(false)

    function autoClose () {
        setShow(false)
    }

    const handleShow = useCallback(() => {
        setShow(!show)
    }, [])

    const handleClick = useCallback((e,objetivo) => { 
            e.preventDefault()
            setSelectedObjetivo(objetivo)
            handleShow()
    },[handleShow])

    console.log(props);
    console.log(refreshObjetivos)


    return (   
        <FormContainer>
                    <GoalTitle>
                        Objetivos
                    </GoalTitle>
                    <GoalContainer>
                            {objetivos.map(objetivo => (
                                <GoalCardOne key={objetivo.id}>
                                        <IdOne> {objetivo.objetivo} </IdOne>
                                        <TargetArrow size="30" />
                                        <Paragraph> R$ {objetivo.alvo} </Paragraph>
                                        <RemoveButton type="button" onClick={(e) => {handleClick(e,objetivo)}}>Excluir</RemoveButton>
                                        { show && <DeleteModalObjetivos   refreshobjetivos={refreshObjetivos} deleteobjetivo={selectedObjetivo} autoclose={autoClose}  /> }
                                </GoalCardOne>        

                            ))}
                </GoalContainer>
      </FormContainer>
    );
}

export default ObjetivoElement;