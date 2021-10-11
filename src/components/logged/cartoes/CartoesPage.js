import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import schema from "./schemaCartoes";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();

  async function onSubmit(values, action) {
    let userPost = await axios.post(
      process.env.REACT_APP_API_URL_CARDS,
      values
    );

    action.resetForm();

    history.push("/home");
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
              data_de_pagamento: "",
              tipo: "",
            }}
            render={({ values, errors, touched, isValid }) => (
              <Form className="FormAlign">
                <RegisterWelcome>Cadastre seus cartões</RegisterWelcome>
                <CardLabel for="CardName">Nome da operadora</CardLabel>
                <Field id="CardName" name="name" type="text" required />
                <ErrorMessage name="name"/>
                <CardLabel for="CardDigits">4 últimos dígitos</CardLabel>
                <Field
                  id="CardDigits"
                  name="digitos"
                  type="number"
                  required
                />
                <ErrorMessage name="digitos"/>
                <CardLabel for="CardLimitBudget">Limite</CardLabel>
                <Field
                  id="CardLimitBudget"
                  name="limite"
                  type="number"
                  required
                />
                <ErrorMessage name="limite"/>
                <CardLabel for="CardPaymentDay">Data de pagamento</CardLabel>
                <Field
                  id="CardPaymentDay"
                  name="data_de_pagamento"
                  type="number"
                  required
                />
                <ErrorMessage name="data_de_pagamento"/>
                <CardLabel for="CardType"> Tipo </CardLabel>
                <CardSelect name="tipo" id="CardType">
                  <option value="débito"> Débito </option>
                  <option value="crédito"> Crédito </option>
                </CardSelect>
                <ErrorMessage name="tipo"/>
                <CardRegister type="submit" disabled={!isValid} > Cadastrar </CardRegister>
              </Form>
            )}
          />
        </LeftContainer>
        <RightContainer>
          <Cardelement />
        </RightContainer>
      </MainContainer>
    </BackgroundContainerStyle>
  );
};

export default Cartoespage;
