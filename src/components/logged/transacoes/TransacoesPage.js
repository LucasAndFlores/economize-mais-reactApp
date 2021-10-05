import React from 'react';
import { BackgroundContainerStyle } from '../../../shared/styles/styleBackground';
import MenuLateral from '../../../shared/components/logged/menuLateral';

import {
    MasterContainer,
    ColumnTwo,
    MarginResumo,
    RegistroDespesas,
    EstiloInput,
    LabelFormTransacoes,
    InputFormTransacoes,
    TransactionHistory,
    Button,
    Select




} from '../transacoes/TransacoesPageStyle'

import adicionar from '../../../shared/img/add.png'

const TransacoesPage = () => {
    return (
        <BackgroundContainerStyle>
            <MasterContainer>
                <MenuLateral />
                <ColumnTwo>
                    <MarginResumo>
                        <h1> Cadastre já suas despesas </h1>
                        <h4>Aqui você vai cadastrar tudo que gasta, para controlar o seu gasto.</h4>
                    </MarginResumo>
                    <RegistroDespesas>
                        <EstiloInput>
                            <LabelFormTransacoes htmlFor="nomedespesa"> Loja </LabelFormTransacoes>
                            <InputFormTransacoes type="text" name="loja" id="nomedespesa" placeholder="Digite aqui onde você comprou"></InputFormTransacoes>
                        </EstiloInput>
                        <EstiloInput>
                            <LabelFormTransacoes htmlFor="datadespesa"> Data de despesa </LabelFormTransacoes>
                            <InputFormTransacoes type="date" name="data_transacao" id="datadespesa" placeholder="Digite aqui quando"></InputFormTransacoes>
                        </EstiloInput>
                        <EstiloInput>
                            <LabelFormTransacoes htmlFor="tipodespesa"> Meio de pagamento </LabelFormTransacoes>
                            <Select name="meio_pagamento" id="tipodespesa">
                                <option value="débito"> Débito </option>
                                <option value="crédito"> Crédito </option>
                            </Select>
                        </EstiloInput>
                        <EstiloInput>
                            <LabelFormTransacoes htmlFor="valordespesa"> Valor da despesa </LabelFormTransacoes>
                            <InputFormTransacoes type="number" name="valor" id="valordespesa" placeholder="Digite aqui quanto foi"></InputFormTransacoes>
                        </EstiloInput>
                        <EstiloInput>
                            <LabelFormTransacoes htmlFor="tipodespesa"> Categoria </LabelFormTransacoes>
                            <Select name="categorias" id="categoria">
                            </Select>
                        </EstiloInput>
                        <Button>
                            <img src={adicionar} alt="adicionarIcone" width="40px" height="40px"></img>
                        </Button>
                    </RegistroDespesas>
                    <TransactionHistory>
                    </TransactionHistory>
                </ColumnTwo>
            </MasterContainer>
        </BackgroundContainerStyle >
    );
}

export default TransacoesPage;
