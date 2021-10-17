import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/auth';
import { BackgroundContainerStyle } from '../../../shared/styles/styleBackground'
import { 
    MainContainer,
    LeftContainer,
    RightContainer,
    WelcomeText,
    LabelForm, 
    RegisterButton,
    ImgRightContainer,
} from './RegisterPageStyles'
import handImage from '../../../shared/img/hand.png'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory } from "react-router-dom";
import axios from 'axios'
import schema from './schemaRegister';
import './FormFormik.css'


const Registerpage = () => {

    const history = useHistory()
    const { setAuthenticated } = useContext(AuthContext)

   async function onSubmit (values, action) {
            let userPost = await axios.post("http://localhost:3030/v1/usuarios/", values)
            localStorage.setItem('token', userPost.data.token)
            localStorage.setItem('user_id', userPost.data.message.id)
            localStorage.setItem('user_name', userPost.data.message.nome)
            setAuthenticated(true)
            action.resetForm()
            history.push("/home")
    }



    return (
        <BackgroundContainerStyle>
            <MainContainer>
                <LeftContainer>
                    <WelcomeText>
                        Cadastre-se agora e comece a controlar as finanças!
                    </WelcomeText>

                    
                    <Formik 
                        validationSchema={schema}
                        onSubmit={onSubmit}
                        initialValues={{
                            nome:'',
                            sobrenome: '',
                            email: '',
                            telefone: "",
                            datanasc: '',
                            senha: ''
                        }}

                    
                            render={({values, errors, touched, isValid}) => (
                                <Form className="FormAlign">
                                        <LabelForm>
                                        Nome
                                        </LabelForm>
                                        <Field name="nome" type="text" />
                                        <ErrorMessage name="nome"/>
                                
                                        <LabelForm for="sobrenome">
                                        Sobrenome
                                        </LabelForm>
                                        <Field name="sobrenome" type="text" />
                                        <ErrorMessage name="sobrenome"/>

                                        <LabelForm for="email">
                                        Email
                                        </LabelForm>
                                        <Field name="email" type="text" />
                                        <ErrorMessage name="email"/>

                                        <LabelForm for="telefone">
                                        Telefone
                                        </LabelForm>
                                        <Field name="telefone" type="text" />
                                        <ErrorMessage name="telefone"/>

                                        <LabelForm for="datanasc">
                                        Data de Nascimento
                                        </LabelForm>
                                        <Field name="datanasc" type="date" />
                                        <ErrorMessage name="datanasc"/>

                                        <LabelForm for="senha">
                                        Crie sua senha
                                        </LabelForm>
                                        <Field name="senha" type="text" />
                                        <ErrorMessage name="senha"/>

                                        <RegisterButton type="submit" disabled={!isValid} > Cadastrar </RegisterButton>

                                </Form>
                            )}
                    
                    />  
                </LeftContainer>
                <RightContainer>
                    <ImgRightContainer src={handImage} />
                </RightContainer>
            </MainContainer>
        </BackgroundContainerStyle>
    );
}

export default Registerpage;
