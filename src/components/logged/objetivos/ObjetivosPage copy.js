import React, { useCallback,useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import schema from "./schemaCartoes";
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
                <FormContainer>
                    <TitleText>
                        Cadastro de Objetivos
                    </TitleText>
                    <DivForm>
                        <LabelForm>
                            Objetivo
                        </LabelForm>
                        <InputForm>
                        </InputForm>
                        <LabelForm>
                            Alvo
                        </LabelForm>
                        <InputForm>
                        </InputForm>
                        <LabelForm>
                            Data Alvo
                        </LabelForm>
                        <InputForm>
                        </InputForm>
                        <RegisterButton>
                            Cadastrar
                        </RegisterButton>
                    </DivForm>
                </FormContainer>
            </RightContainer>
            
                <RightContainerOne>
                    <FormContainer>
                        <GoalTitle>
                            Objetivos
                        </GoalTitle>

                        <GoalContainer>                            
                                <GoalCardOne>
                                    <DivCard>
                                        <IdOne>
                                            R$ 300
                                        </IdOne>
                                        <Paragraph>
                                            12/07/2024
                                        </Paragraph>
                                    </DivCard>
                                    <DivCard>
                                        <AirplaneTicket size="40" />
                                        <IdOne>
                                            Férias
                                        </IdOne>
                                        <Paragraph>
                                            Viagem para Paraguay
                                        </Paragraph>
                                    </DivCard>
                                </GoalCardOne>

                                <GoalCardOne>
                                    <DivCard>
                                        <IdOne>
                                            R$ 300
                                        </IdOne>
                                        <Paragraph>
                                            12/07/2024
                                        </Paragraph>
                                    </DivCard>
                                    <DivCard>
                                        <AirplaneTicket size="40" />
                                        <IdOne>
                                            Férias
                                        </IdOne>
                                        <Paragraph>
                                            Viagem para Paraguay
                                        </Paragraph>
                                    </DivCard>
                                </GoalCardOne>

                                <GoalCardOne>
                                    <DivCard>
                                        <IdOne>
                                            R$ 300
                                        </IdOne>
                                        <Paragraph>
                                            12/07/2024
                                        </Paragraph>
                                    </DivCard>
                                    <DivCard>
                                        <AirplaneTicket size="40" />
                                        <IdOne>
                                            Férias
                                        </IdOne>
                                        <Paragraph>
                                            Viagem para Paraguay
                                        </Paragraph>
                                    </DivCard>
                                </GoalCardOne>  
                        </GoalContainer>
                    </FormContainer>
                </RightContainerOne>
            

           </MainContainer>
        </BackgroundContainerStyle>
    );
}

export default ObjetivosPage;