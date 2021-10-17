import React, { useCallback,useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import schema from "./schemaObjetivos";
import { BackgroundContainerStyle } from '../../../shared/styles/styleBackground';
import MenuLateral from '../../../shared/components/logged/menuLateral';
import UserBar from '../../../shared/components/logged/UserBar/UserBar';
import { api } from '../../../services/api';
import {    
    RightContainer,
    RightContainerOne,
    MainContainer,    
    FormContainer,
    TitleText,
    LabelForm,
    DivForm,
    InputForm,
    RegisterButton,
    GoalContainer,
    GoalTitle,    
    IdOne,
    Paragraph,    
    DivCard,    
} from './ObjetivosPageStyle'
import ObjetivoElement from "./components/ObjetivoElement";
import "./ObjetivosFormFormik.css";

const ObjetivosPage = () => {

    const fkUsuarioId = localStorage.getItem("user_id")

    const objectivesInitialValues = {
        objetivo: "",
        alvo: "",
        dataAlvo: "",    
        fkUsuarioId 
    }

    const [objetivos, setObjetivos] = useState([])

    const getObjetivos = useCallback(async () => {
        let response = await api.get(`objetivos/${fkUsuarioId}`)
        setObjetivos(response.data)
    },[])

    useEffect( () => {
        getObjetivos();
    }, []);

    async function onSubmit(values, action) {
        let registroObjetivo = await api.post("objetivos", values)
        let pegarNovosObjetivos = await getObjetivos()
        action.resetForm();
        console.log(values)
    }

    
    return (
        <BackgroundContainerStyle>
           <MainContainer>
            <MenuLateral />
            <UserBar />
            <RightContainer>
                <Formik
                    validationSchema={schema}
                    onSubmit={onSubmit}
                    initialValues={objectivesInitialValues}
                    >
                    {({ values, errors, touched, isValid }) => (
                        <Form className="FormAlign">
                            <TitleText>Cadastro de Objetivos</TitleText>
                            <LabelForm for="objetivo">Objetivo</LabelForm>
                            <Field id="pbjetivo" name="objetivo" type="text"  />
                            <ErrorMessage name="objetivo" />

                            <LabelForm for="alvo">Alvo</LabelForm>
                            <Field id="alvo" name="alvo" type="number"  />
                            <ErrorMessage name="alvo" />

                            <LabelForm for="dataAlvo">Data Alvo</LabelForm>
                            <Field id="dataAlvo" name="dataAlvo" type="date"  />
                            <ErrorMessage name="dataAlvo" />
                            
                            <RegisterButton type="submit" >Cadastrar</RegisterButton>
                        </Form>
                    )}
                </Formik>
            </RightContainer>

            <RightContainerOne>

                        <ObjetivoElement objetivos={objetivos} getObjetivos={getObjetivos}/>

            </RightContainerOne>
            
            

           </MainContainer>
        </BackgroundContainerStyle>
    );
}

export default ObjetivosPage;