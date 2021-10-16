import React from 'react';
import reactDom from 'react-dom';
import {
    MainContainer,
    ModalStyle,
    Button,
    Label
} from './styles'
import { api } from '../../../../../services/api';
import schemaEntradas from '../../schemaEntradas';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const PutModalEntrada = (props) => {

    const entradaId = props.putentradas.id
    const autoClose = props.autoclose
    const refreshEntrada = props.refreshentrada

    const entradasActualValues = {
        nome: props.putentradas.nome,
        valor: props.putentradas.valor,
        data: props.putentradas.data,
        fkUsuarioId: props.putentradas.fkUsuarioId
    }

    async function onSubmit (values, action) {
        let updateEntrada = await api.put(`entradas/${entradaId}`, values)
        refreshEntrada()
        autoClose()
    }

    return reactDom.createPortal(
        <>
            <MainContainer>
                        <ModalStyle>
                            <Formik
                                onSubmit={onSubmit}
                                validationSchema={schemaEntradas}
                                initialValues={entradasActualValues}
                            >
                                    {({values, errors, touched}) => (

                                            <Form className="entradasForm">
                                                
                                                <Label htmlFor="nome"> Tipo de renda </Label>
                                                <Field type="text" name="nome" placeholder="Exemplo: Trabalho CLT ou Freela" />
                                                <ErrorMessage name="nome"/>

                                                <Label> Valor </Label>
                                                <Field type="number" name="valor" />
                                                <ErrorMessage name="valor"/>

                                                <Label htmlFor="loja"> Data </Label>
                                                <Field type="date" name="data" />
                                                <ErrorMessage name="data"/>

                                                <Button type="submit">Cadastrar</Button>
                                                
                                                </Form>

)}

                            </Formik>
                        </ModalStyle>
            </MainContainer>
            
        </>,
    document.getElementById("portal")
    )
}

export default PutModalEntrada;
