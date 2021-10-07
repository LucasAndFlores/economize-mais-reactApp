import React from 'react';
import { BackgroundContainerStyle } from '../../../shared/styles/styleBackground'
import { 
    MainContainer,
    LeftContainer,
    RightContainer,
    WelcomeText,
    InputForm,
    LabelForm, 
    RegisterButton,
    ImgRightContainer,
} from './RegisterPageStyles'
import handImage from '../../../shared/img/hand.png'

const Registerpage = () => {
    return (
        <BackgroundContainerStyle>
            <MainContainer>
                <LeftContainer>
                    <WelcomeText>
                        Cadastre-se agora e comece a controlar as finanças!
                    </WelcomeText>
                    <LabelForm for="userName">
                        Nome
                    </LabelForm>
                    <InputForm name="nome" id="userName" type="text" required />
                    <LabelForm for="userSobrenome">
                        Sobrenome
                    </LabelForm>
                    <InputForm name="sobrenome" id="userSobrenome" type="text" required />
                    <LabelForm for="userEmail">
                        Email
                    </LabelForm>
                    <InputForm name="email" id="userEmail" type="text" required />
                    <LabelForm for="userDataDeNasc">
                        Data de Nascimento
                    </LabelForm>
                    <InputForm name="datanasc" id="userDataDeNasc" type="date" />
                    <LabelForm for="userPassword">
                        Crie sua senha
                    </LabelForm>
                    <InputForm name="senha" id="userPassword" type="text" required />
                    <LabelForm for="userPasswordConfirm">
                        Confirme sua senha
                    </LabelForm>
                    <InputForm name="senha_confirmada" id="userPasswordConfirm" type="text" required />
                    <RegisterButton> Cadastrar </RegisterButton>
                </LeftContainer>
                <RightContainer>
                    <ImgRightContainer src={handImage} />
                </RightContainer>
            </MainContainer>
        </BackgroundContainerStyle>
    );
}

export default Registerpage;
