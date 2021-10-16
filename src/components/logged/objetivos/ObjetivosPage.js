import React, { useCallback,useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import schema from "./schemaObjetivos";
import { BackgroundContainerStyle } from '../../../shared/styles/styleBackground';
import MenuLateral from '../../../shared/components/logged/menuLateral';
import {AirplaneTicket} from '@styled-icons/material-outlined/AirplaneTicket';
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
    GoalCardOne,
    IdOne,
    Paragraph,    
    DivCard,    
} from './ObjetivosPageStyle'
import "./ObjetivosFormFormik.css";

const ObjetivosPage = () => {

    const fkUsuarioId = localStorage.getItem("user_id")

    const [objetivos, setObjetivos] = useState([])

    const getObjetivos = useCallback(async () => {
        let response = await api.get(`objetivos/${fkUsuarioId}`)
        
        setObjetivos(response.data)
    })

    useEffect( () => {
        getObjetivos();
    }, []);

    async function onSubmit(values, action) {
        
        values.fkUsuarioId = fkUsuarioId;

        await api.post("objetivos", values)
        await getObjetivos()
        
        action.resetForm();

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
                    initialValues={{
                        objetivo: "",
                        alvo: "",
                        dataAlvo: "",                        
                    }}
                    render={({ values, errors, touched, isValid }) => (
                        <FormContainer /* className="FormAlign" */>
                            <TitleText>Cadastro de Objetivos</TitleText>
                            <LabelForm for="Objetivo">Objetivo</LabelForm>
                            <Field id="Objetivo" name="objetivo" type="text" required />
                            <ErrorMessage name="objetivo" />

                            <LabelForm for="Alvo">Alvo</LabelForm>
                            <Field id="Alvo" name="alvo" type="text" required />
                            <ErrorMessage name="alvo" />

                            <LabelForm for="DatAlvo">Data Alvo</LabelForm>
                            <Field id="Data Alvo" name="dataAlvo" type="text" required />
                            <ErrorMessage name="dataAlvo" />
                            
                            <RegisterButton type="submit" disabled={!isValid} >Cadastrar</RegisterButton>
                        </FormContainer>
                    )}
                />
            </RightContainer>

            <RightContainerOne>
                <FormContainer>
                    <GoalTitle>
                        Objetivos
                    </GoalTitle>
                    <GoalContainer>
                    {objetivos.map(object => (
                        <GoalCardOne objetivos={object} getObjetivos={getObjetivos}/>

                                
                    )
                    
                    )
                   
                    }
                    </GoalContainer>
                </FormContainer>
            </RightContainerOne>
            
            

           </MainContainer>
        </BackgroundContainerStyle>
    );
}

export default ObjetivosPage;