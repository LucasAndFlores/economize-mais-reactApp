import React from 'react';
import { useHistory } from 'react-router-dom';
import NavBarHome from '../../../shared/components/navBar'
import { BackgroundContainerStyle } from '../../../shared/styles/styleBackground'
import { LogoStyle, HeaderContainer } from '../home/initialPageStyle'
import {
    ContainerMain,
    ContainerRight, 
    ContainerLeft,
    ImageLogin, 
    ProfileIcon,
    ButtonsContainer,
    FormContainer,
    InputFormLogin,
    LabelFormLogin,
    TextOfButtons,
    Buttons
} from './LoginPageStyles'
import logo from '../../../shared/img/logo_economize.jpg'
import imageright from '../../../shared/img/xcomo-controlar-a-ansiedade.png.pagespeed.ic 1.png'
import {UserAlt} from '@styled-icons/fa-solid'

const LoginPage = () => {

    const history = useHistory();
    
    return (
        <BackgroundContainerStyle>
            <HeaderContainer>
            <LogoStyle src={logo} />
            <NavBarHome />
            </HeaderContainer>
            <ContainerMain>
                <ContainerLeft>
                    <ImageLogin src={imageright} />
                </ContainerLeft>
                <ContainerRight>
                    <ProfileIcon>
                          <UserAlt size="60" />
                    </ProfileIcon>
                    <FormContainer>
                          <LabelFormLogin htmlFor="emailLogin"> Insira seu email </LabelFormLogin>
                          <InputFormLogin id="emailLogin" name="user_login" type="text"></InputFormLogin> 
                          <LabelFormLogin htmlFor="passwordLogin"> Insira sua senha </LabelFormLogin>
                          <InputFormLogin id="passwordLogin" name="user_senha" type="text"></InputFormLogin>  
                    </FormContainer>
                    <ButtonsContainer>
                            <TextOfButtons>Esqueceu sua senha ?</TextOfButtons>
                            <Buttons> LOGIN </Buttons>
                            <TextOfButtons> Ainda não tem cadastro ? </TextOfButtons>
                            <Buttons onClick={() => { history.push('/cadastro') }}> Crie uma conta ! </Buttons>
                    </ButtonsContainer>
                </ContainerRight>
            </ContainerMain>

        </BackgroundContainerStyle>
    );
}

export default LoginPage;
