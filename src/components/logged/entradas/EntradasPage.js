import React from 'react';
import MenuLateral from '../../../shared/components/logged/menuLateral';

import {
    MasterContainer,
    Container,
    ContainerForm,
    EspancamentoDiv,
    LabelDiv,
    H1,
    CartoesForm,
    FormatarForm,
    Form,
    InputCartoes,
    GenericLabel
    
    

} from '../entradas/EntradasPageStyle'

import controleFinanceiro from '../../../shared/img/controle-financeiro.jpg'
import budget from '../../../shared/img/budget 1.png'

const EntradasPage = () => {
    return (
        <MasterContainer>
            <MenuLateral />
            <Container>
                <ContainerForm>
                    <EspancamentoDiv>
                        <LabelDiv>
                            <H1>Cadastro de Entradas</H1>
                        </LabelDiv>    
                        <CartoesForm>
                            <FormatarForm>
                                <Form>
                                    <InputCartoes>
                                    <GenericLabel>Tipo de Renda</GenericLabel>
                                    </InputCartoes>
                                </Form>
                            </FormatarForm>
                        </CartoesForm>
                    </EspancamentoDiv>
                </ContainerForm>
            </Container>
            
        </MasterContainer>
    );
}

export default EntradasPage;
