import React from 'react';
import { BackgroundContainerStyle } from '../../../shared/styles/styleBackground'
import {
    MainContainer,
    LeftContainer,
    RightContainer,
    FormCardRegister,
    RegisterWelcome,
    CardInput,
    CardLabel,
    CardSelect,
    CardRegister
} from './CartoesPageStyles'
import Cardelement from './components/CardElement';
import MenuLateral from '../../../shared/components/logged/menuLateral';
import UserBar from '../../../shared/components/logged/UserBar/UserBar';


const Cartoespage = () => {
    return (
        <BackgroundContainerStyle>
            <MenuLateral />
            <UserBar />
            <MainContainer>
                <LeftContainer>
                    <FormCardRegister>
                        <RegisterWelcome>Cadastre seus cartões</RegisterWelcome>
                        <CardLabel for="CardName" >Nome da operadora</CardLabel> 
                        <CardInput id="CardName" name="name" type="text"  required/>
                        <CardLabel for="CardDigits" >4 últimos dígitos</CardLabel> 
                        <CardInput id="CardDigits" name="digitos" type="number" required/>
                        <CardLabel for="CardLimitBudget" >Limite</CardLabel> 
                        <CardInput id="CardLimitBudget" name="limite" type="number" required/>
                        <CardLabel for="CardPaymentDay" >Data de pagamento</CardLabel> 
                        <CardInput id="CardPaymentDay" name="data_de_pagamento" type="number" required/>
                        <CardLabel for="CardType" > Tipo </CardLabel> 
                        <CardSelect name="tipo" id="CardType">
                            <option value="débito" > Débito </option>
                            <option value="crédito" > Crédito </option>
                        </CardSelect>
                        <CardRegister> Cadastrar </CardRegister>
                    </FormCardRegister>
                    
                </LeftContainer>
                <RightContainer>
                    <Cardelement />
                </RightContainer>
            </MainContainer>

        </BackgroundContainerStyle>
    );
}

export default Cartoespage;
