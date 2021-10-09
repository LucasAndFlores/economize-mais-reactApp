import React from 'react';


import {
    MasterContainer,
    Container,
    TitleDiv,
    H1,
    Form,
    FormInputs,
    Label,
    Input,
    Button,
    TabelaEntradas



} from '../entradas/EntradasCardStyle'

import controleFinanceiro from '../../../shared/img/controle-financeiro.jpg'
import budget from '../../../shared/img/budget 1.png'

const EntradasCard = () => {
    return (
      
            <Container>
                <TitleDiv>
                    <H1>Cadastro de Entradas</H1>
                </TitleDiv>
                <Form>
                    <FormInputs>
                        <Label>Tipo de Renda</Label>
                        <br></br>
                        <Input type="text" id="nome" name="nome" placeholder="Exemplo: Trabalho CLT ou Freela" required />
                        <br></br>
                        <br></br>
                        <Label>Valor</Label>
                        <br></br>
                        <Input type="text" id="valor" name="valor" placeholder="Exemplo: R$ 3000,00" required />
                        <br></br>
                        <br></br>
                        <Label>Data da Entrada</Label>
                        <br></br>
                        <Input type="date" id="data" name="data" required />
                        <br></br>
                        <div id="button">
                            <Button>Cadastrar</Button>
                        </div>
                        <H1>Minhas Entradas</H1>
                        <TabelaEntradas>
                            <thead>
                                <tr>
                                    <th>Tipo de Renda</th>
                                    <th>Valor</th>
                                    <th>Data</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                </tr>
                            </tbody>
                        </TabelaEntradas>
                    </FormInputs>
                </Form>
            </Container>
     
    );
}

export default EntradasCard;
