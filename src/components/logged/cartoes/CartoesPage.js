import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import schema from "./schemaCartoes";
import { useHistory } from "react-router-dom";
import { api } from '../../../services/api';

import { BackgroundContainerStyle } from "../../../shared/styles/styleBackground";
import {
    MainContainer,
    LeftContainer,
    RightContainer,
    FormCardRegister,
    RegisterWelcome,
    CardInput,
    CardLabel,
    CardSelect,
    CardRegister,
} from "./CartoesPageStyles";
import Cardelement from "./components/CardElement";
import MenuLateral from "../../../shared/components/logged/menuLateral";
import UserBar from "../../../shared/components/logged/UserBar/UserBar";
import "./FormFormik.css";



const Cartoespage = () => {

    const fkUsuarioId = localStorage.getItem("user_id")


    const [cartoes, setCartoes] = useState([])




    useEffect( () => {

        console.log(fkUsuarioId);
        api.get(`cartoes/${fkUsuarioId}`).then(

            (results) => {
                setCartoes(results.data.todosCartoes)
                console.log(results.data.todosCartoes);
            }
        )

    }, [setCartoes]);


    async function onSubmit(values, action) {
        
        values.fkUsuarioId = fkUsuarioId;

        const results = api.post("/cartoes", values).then(results => {
            console.log(results);
        });
        setCartoes();
        action.resetForm();

    }
    return (
        <BackgroundContainerStyle>
            <MenuLateral />
            <UserBar />
            <MainContainer>
                <LeftContainer>
                    <Formik
                        validationSchema={schema}
                        onSubmit={onSubmit}
                        initialValues={{
                            name: "",
                            digitos: "",
                            limite: "",
                            dataDePagamento: "",
                            tipo: "",
                        }}
                        render={({ values, errors, touched, isValid }) => (
                            <Form className="FormAlign">
                                <RegisterWelcome>Cadastre seus cartões</RegisterWelcome>
                                <CardLabel for="CardName">Nome da operadora</CardLabel>
                                <Field id="CardName" name="name" type="text" required />
                                <ErrorMessage name="name" />
                                <CardLabel for="CardDigits">4 últimos dígitos</CardLabel>
                                <Field className="Input"
                                    id="CardDigits"
                                    name="digitos"
                                    type="number"
                                    required
                                />
                                <ErrorMessage name="digitos" />
                                <CardLabel for="CardLimitBudget">Limite</CardLabel>
                                <Field className="Input"
                                    id="CardLimitBudget"
                                    name="limite"
                                    type="number"
                                    required
                                />
                                <ErrorMessage name="limite" />
                                <CardLabel for="CardPaymentDay">Data de pagamento</CardLabel>
                                <Field className="Input"
                                    id="CardPaymentDay"
                                    name="dataDePagamento"
                                    type="number"
                                    required
                                />
                                <ErrorMessage name="dataDePagamento" />
                                <CardLabel for="CardType"> Tipo </CardLabel>
                                <Field className="Input" name="tipo" id="CardType" as="Select">
                                    <option value="debito">Débito</option>
                                    <option value="credito">Crédito</option>
                                </Field>

                                <ErrorMessage name="tipo" />
                                <CardRegister type="submit" disabled={!isValid} > Cadastrar </CardRegister>
                            </Form>
                        )}
                    />
                </LeftContainer>
                <RightContainer>
                    {cartoes.map(object => (
                        <Cardelement cartao={object} />

                    )
                    )
                    }

                </RightContainer>
            </MainContainer>
        </BackgroundContainerStyle>
    );
};

export default Cartoespage;
