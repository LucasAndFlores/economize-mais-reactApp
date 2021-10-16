import React from 'react';
import {Money} from '@styled-icons/boxicons-regular/Money'

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

    console.log(entradas)
    console.log(getEntradas)

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
                                        <Button> Editar </Button>
                                        <Button> Deletar </Button>
                                    </ContainerButtons>
                                    
                        </EntradasInfo>
                        </EntradasCard>
                    ))}
    </Container>
     
    );
}

export default EntradasCardObject;
