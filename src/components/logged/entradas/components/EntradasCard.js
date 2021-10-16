import React, {useCallback, useState} from 'react';
import {Money} from '@styled-icons/boxicons-regular/Money'
import PutModalEntrada from './putModalEntrada';
import DeleteModalEntrada from './deleteModalEntrada';

import {
    Container,
    EntradasCard,
    MoneyIcon,
    EntradasInfo,
    EntradaData,
    EntradaLabel,
    EntradaAlign,
    Button,
    ContainerButtons
    
} from './EntradasCardStyle'



const EntradasCardObject = (props) => {
    const entradas = props.entradas.entradas
    const getEntradas = props.getentradas

    const [showEntradas, setShowEntradas] = useState(false)
    const [selectedEntrada, setSelectedEntrada] = useState()
    const [operationEntrada, setOperationEntrada] = useState(false)

    function autoCloseEntrada () {
        setShowEntradas(false)
    } 

    const handleShowEntrada = useCallback(() => {
        setShowEntradas(!showEntradas)
    },[showEntradas])

    const handleClickEntrada = useCallback((e, entrada) => {
        e.preventDefault()
        setSelectedEntrada(entrada)
        handleShowEntrada()
    }, [handleShowEntrada])

    return (
      
            <Container>
                {entradas.map(entrada => (

                        <EntradasCard key={entrada.id}>
                        <MoneyIcon>
                            <Money size="100" />
                        </MoneyIcon>
                        <EntradasInfo>
                                    <EntradaAlign>
                                        <EntradaLabel>Tipo de renda:</EntradaLabel> 
                                        <EntradaData> {entrada.nome} </EntradaData> 
                                    </EntradaAlign>
                                    <EntradaAlign>
                                        <EntradaLabel>Valor:</EntradaLabel> 
                                        <EntradaData> {entrada.valor} </EntradaData> 
                                    </EntradaAlign>
                                    <EntradaAlign>
                                        <EntradaLabel>Data:</EntradaLabel> 
                                        <EntradaData> {entrada.data} </EntradaData> 
                                    </EntradaAlign>
                                    <ContainerButtons>
                                        <Button onClick={(e) => {handleClickEntrada(e, entrada); setOperationEntrada(false)}}> Editar </Button>
                                        {showEntradas && !operationEntrada && 
                                        <PutModalEntrada  putentradas={selectedEntrada} autoclose={autoCloseEntrada} refreshentrada={getEntradas}    />}


                                        <Button onClick={(e) => {handleClickEntrada(e, entrada); setOperationEntrada(true)}}> Deletar </Button>
                                        {showEntradas && operationEntrada  && 
                                        <DeleteModalEntrada deleteentradas={selectedEntrada} autoclose={autoCloseEntrada} refreshentrada={getEntradas}      />}
                                    </ContainerButtons>
                                    
                        </EntradasInfo>
                        </EntradasCard>
                    ))}
    </Container>
     
    );
}

export default EntradasCardObject;
