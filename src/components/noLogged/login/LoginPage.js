import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
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
    LabelFormLogin,
    TextOfButtons,
    Buttons
} from './LoginPageStyles'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import logo from '../../../shared/img/logo_economize.jpg'
import imageright from '../../../shared/img/xcomo-controlar-a-ansiedade.png.pagespeed.ic 1.png'
import {UserAlt} from '@styled-icons/fa-solid'
import './LoginFormFormik.css'
import  schemaLogin  from './schemaLogin'
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/auth';

const LoginPage = () => {

    const { setAuthenticated, authenticated } = useContext(AuthContext)
    const history = useHistory();


    async function onSubmit (values, action) {
        const madeLogin = await axios.post("http://localhost:3030/v1/usuarios/autorizacao", values)
        console.log(madeLogin)
        localStorage.setItem("token", madeLogin.data.token) 
        localStorage.setItem("user_id", madeLogin.data.id) 
        localStorage.setItem("user_name", madeLogin.data.nome)
        setAuthenticated(true)    
        action.resetForm()
        history.push("/home")
    }
    
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
                            <Formik 
                                validationSchema={schemaLogin}
                                onSubmit={onSubmit}
                                initialValues={{
                                     email: '',
                                     senha: ''
                                 }}
                            
                                 render={({values, errors, touched, isValid}) => (
                                    <Form className="LoginForm">
                                            <LabelFormLogin>
                                            Insira seu email
                                            </LabelFormLogin>
                                            <Field name="email" type="text" />
                                            <ErrorMessage name="email"/>

                                            <LabelFormLogin>
                                            Insira sua senha
                                            </LabelFormLogin>
                                            <Field name="senha" type="text" />
                                            <ErrorMessage name="senha"/>
    
                                            <Buttons type="submit" > LOGIN </Buttons>
                                    </Form>
                                )}
                            
                            />
                    </FormContainer>
                    <ButtonsContainer>
                            <TextOfButtons>Esqueceu sua senha ?</TextOfButtons>
                            <TextOfButtons> Ainda não tem cadastro ? </TextOfButtons>
                            <Buttons onClick={() => { history.push('/cadastro') }}> Crie uma conta ! </Buttons>
                    </ButtonsContainer>
                </ContainerRight>
            </ContainerMain>

        </BackgroundContainerStyle>
    );
}

export default LoginPage;
