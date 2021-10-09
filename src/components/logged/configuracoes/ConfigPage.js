import React from 'react';
import { BackgroundContainerStyle } from '../../../shared/styles/styleBackground'
import {
    InputForm,
    LabelForm, 
    LeftContainer,
    MainContainer,
    RegisterButton,
    WelcomeText,
    AlignInputLabel
} from './ConfigPageStyles'

const Configpage = () => {
    return (
        <BackgroundContainerStyle>
        <MainContainer>
            <LeftContainer>
                <WelcomeText>
                    Quer editar seus dados? 
                </WelcomeText>
                <AlignInputLabel>
                <LabelForm for="userName">
                    Alterar Nome
                </LabelForm>  
                <InputForm name="nome" id="userName" type="text" required />
                <RegisterButton> Alterar </RegisterButton>
                </AlignInputLabel>
                <AlignInputLabel>
                <LabelForm for="userSobrenome">
                    Alterar Sobrenome
                </LabelForm>
                <InputForm name="sobrenome" id="userSobrenome" type="text" required />
                <RegisterButton> Alterar </RegisterButton>
                </AlignInputLabel>
                <AlignInputLabel>
                <LabelForm for="userEmail">
                    Alterar Email
                </LabelForm>
                <InputForm name="email" id="userEmail" type="text" required />
                <RegisterButton> Alterar </RegisterButton>
                </AlignInputLabel>
                <AlignInputLabel>
                <LabelForm for="userPassword">
                    Alterar sua senha
                </LabelForm>
                <InputForm name="senha" id="userPassword" type="text" required />
                <RegisterButton> Alterar </RegisterButton>
                </AlignInputLabel>
            </LeftContainer>
        </MainContainer>
    </BackgroundContainerStyle>
    );
}

export default Configpage;
