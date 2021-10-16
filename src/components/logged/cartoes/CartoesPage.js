import React, { useCallback, useEffect, useState } from 'react'
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

    const [cartoes, setCartoes] = useState([]);
    const [name, setNome] = useState();
    const [digitos, setDigitos] = useState();
    const [limite, setLimite] = useState();
    const [dataDePagamento, setDataPagamento] = useState();
    const [tipoLista, setTipoLista] = useState([{ label: "Debito", value: "debito" }, { label: "Crédito", value: "credito" }]);
    const [tipo, setTipo] = useState({ label: "Crédito", value: "credito" });
    const [id, setId] = useState();
    const [tipoTransacao, setTipoTransacao] = useState('Cadastrar');

    const getCartoes = useCallback(async () => {


        let response = await api.get(`cartoes/${fkUsuarioId}`)

        setCartoes(response.data)
    })

    const setCartao = useCallback(async (cartao) => {
        setNome(cartao.name);
        
        setDigitos(cartao.digitos);
        setLimite(cartao.limite);
        setDataPagamento(cartao.dataDePagamento);
        setId(cartao.id);
        setTipoSelected(cartao.tipo);
        setTipoTransacao('Alterar');
    })

    const clearForm = useCallback(async () => {
        setNome('');
        setDigitos('');
        setLimite('');
        setDataPagamento('');
    })

    const setTipoSelected = useCallback(async (value) => {
        let label = '';
        value =="credito" ? label = "Crédito" : label = 'Debito'
        setTipo({ label: value, value: value })
    })


    useEffect(() => {
        getCartoes();
    }, []);

    async function onSubmit(values, action) {

        values.fkUsuarioId = fkUsuarioId;
       
        values.name = name
        values.digitos = digitos
        values.limite = limite
        values.dataDePagamento = dataDePagamento
        values.tipo = tipo.value
      
        if (tipoTransacao === 'Cadastrar') {
            await api.post("cartoes", values)
        }
        if (tipoTransacao === 'Alterar') {

            await api.put(`cartoes/${id}`, values)
            setTipoTransacao('Cadastrar');
        }


        await getCartoes()

        await clearForm();


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
                                <Field id="CardName" name="name" type="text" value={name}  
                                onChange={(e) => setNome(e.target.value)}
                                required />
                                <ErrorMessage name="name" />
                                <CardLabel for="CardDigits">4 últimos dígitos</CardLabel>
                                <Field className="Input"
                                    id="CardDigits"
                                    name="digitos"
                                    type="number"
                                    value={digitos}
                                    onChange={(e) => setDigitos(e.target.value)}

                                    required
                                />
                                <ErrorMessage name="digitos" />
                                <CardLabel for="CardLimitBudget">Limite</CardLabel>
                                <Field className="Input"
                                    id="CardLimitBudget"
                                    name="limite"
                                    type="number"
                                    value={limite}
                                    onChange={(e) => setLimite(e.target.value)}
                                    required
                                />
                                <ErrorMessage name="limite" />
                                <CardLabel for="CardPaymentDay">Data de pagamento</CardLabel>
                                <Field className="Input"
                                    id="CardPaymentDay"
                                    name="dataDePagamento"
                                    type="number"
                                    value={dataDePagamento}
                                    onChange={(e) => setDataPagamento(e.target.value)}
                                    required
                                />
                                <ErrorMessage name="dataDePagamento" />
                                <CardLabel for="CardType"> Tipo </CardLabel>
                                <Field className="Input" name="tipo" id="CardType" as="Select"
                                    onChange={(e) => setTipoSelected(e.target.value)}
                                >

                                    {tipoLista.map((option) => {
                                        if (option.value === tipo.value) {
                                            return <option value={option.value} selected>{option.label}</option>
                                        } else {
                                            return <option value={option.value}>{option.label}</option>
                                        }

                                    }

                                    )}

                                </Field>

                                <ErrorMessage name="tipo" />

                                <CardRegister type="submit" disabled={!isValid} > {tipoTransacao} </CardRegister>

                            </Form>
                        )}
                    />
                </LeftContainer>
                <RightContainer>
                    {cartoes.map(object => {
                        return( [<Cardelement cartao={object} getCartoes={getCartoes} setCartao={setCartao} />,
                        <br></br>
                        ])
                    }

                    )

                    }

                </RightContainer>
            </MainContainer>
        </BackgroundContainerStyle>
    );
};

export default Cartoespage;
