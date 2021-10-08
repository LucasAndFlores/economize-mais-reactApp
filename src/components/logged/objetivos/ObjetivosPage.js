import React from 'react';
import { BackgroundContainerStyle } from '../../../shared/styles/styleBackground';
import MenuLateral from '../../../shared/components/logged/menuLateral';
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
    CardGoalContainer
} from './ObjetivosPageStyle'

const ObjetivosPage = () => {
    return (
        <BackgroundContainerStyle>
           <MainContainer>
            <MenuLateral />
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
                            <CardGoalContainer>
                                <GoalCardOne>
                                    <IdOne>
                                        R$ 300
                                    </IdOne>
                                    <Paragraph>
                                        12/07/2024
                                    </Paragraph>
                                    <IdOne>
                                        Férias
                                    </IdOne>
                                    <Paragraph>
                                        Viagem Paraguay
                                    </Paragraph>
                                </GoalCardOne>

                                <GoalCardOne>
                                    <IdOne>
                                        R$ 300
                                    </IdOne>
                                    <Paragraph>
                                        12/07/2024
                                    </Paragraph>
                                    <IdOne>
                                        Férias
                                    </IdOne>
                                    <Paragraph>
                                        Viagem Paraguay
                                    </Paragraph>
                                </GoalCardOne>

                                <GoalCardOne>
                                    <IdOne>
                                        R$ 300
                                    </IdOne>
                                    <Paragraph>
                                        12/07/2024
                                    </Paragraph>
                                    <IdOne>
                                        Férias
                                    </IdOne>
                                    <Paragraph>
                                        Viagem Paraguay
                                    </Paragraph>
                                </GoalCardOne>                            
                            
                            </CardGoalContainer>
                        </GoalContainer>
                    </FormContainer>
                </RightContainerOne>
            

           </MainContainer>
        </BackgroundContainerStyle>
    );
}

export default ObjetivosPage;