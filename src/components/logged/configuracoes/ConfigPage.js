import React, { useCallback, useEffect, useState } from 'react'
import { api } from '../../../services/api';
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

    const [state, setState] = useState({
        nome: "",
        sobrenome: "",
        email: "",
        telefone: ""
    })

    function stateHandler(name, value) {
        setState(state => ({ ...state, [name]: value }))
    }

    const fkUsuarioId = localStorage.getItem("user_id");
    const getUserInfo = useCallback(async () => {

        let response = await api.get(`usuarios/${fkUsuarioId}`)

        stateHandler("nome", response.data.usuario.nome);
        stateHandler("sobrenome", response.data.usuario.sobrenome);
        stateHandler("email", response.data.usuario.email);
        stateHandler("telefone", response.data.usuario.telefone);
        
    });

    async function onSubmit(e) {
        console.log(e.target.id);
        console.log(state.nome);

        let values = {
            nome: state.nome,
            sobrenome: state.sobrenome,
            email: state.email,
            telefone: state.telefone
        }
        console.log(values);
        let response = await api.put(`usuarios/${fkUsuarioId}`, values);
        getUserInfo();
    }

    useEffect(() => {
        getUserInfo();
    }, []);
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
                        <InputForm name="nome" id="userName" type="text"
                            value={state.nome}
                            onChange={(e) => stateHandler(e.target.name, e.target.value)}
                            required />
                        <RegisterButton id="nome" onClick={(e) => onSubmit(e)}> Alterar </RegisterButton>
                    </AlignInputLabel>
                    <AlignInputLabel>
                        <LabelForm for="userSobrenome">
                            Alterar Sobrenome
                        </LabelForm>
                        <InputForm name="sobrenome" id="userSobrenome" type="text"
                            value={state.sobrenome}
                            onChange={(e) => stateHandler(e.target.name, e.target.value)}
                            required />
                        <RegisterButton> Alterar </RegisterButton>
                    </AlignInputLabel>
                    <AlignInputLabel>
                        <LabelForm for="userEmail">
                            Alterar Email
                        </LabelForm>
                        <InputForm name="email" id="userEmail" type="text"
                            value={state.email}
                            onChange={(e) => stateHandler(e.target.name, e.target.value)}
                            required />
                        <RegisterButton> Alterar </RegisterButton>
                    </AlignInputLabel>
                    <AlignInputLabel>
                        <LabelForm for="userTelefone">
                            Alterar Telefone
                        </LabelForm>
                        <InputForm name="telefone" id="userTelefone" type="text"
                            value={state.telefone}
                            onChange={(e) => stateHandler(e.target.name, e.target.value)}
                            required />
                        <RegisterButton> Alterar </RegisterButton>
                    </AlignInputLabel>
                    <AlignInputLabel>
                        <LabelForm for="userDataNasc">
                            Alterar Data de Nascimento
                        </LabelForm>
                        <InputForm name="datanasc" id="userDataNasc" type="text"
                            value={state.datanasc}
                            onChange={(e) => stateHandler(e.target.name, e.target.value)}
                            required />
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
