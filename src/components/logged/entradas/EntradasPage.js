import React, {useCallback, useEffect, useState} from 'react';
import MenuLateral from '../../../shared/components/logged/menuLateral';
import UserBar from '../../../shared/components/logged/UserBar/UserBar'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import schemaEntradas from './schemaEntradas'
import { api } from '../../../services/api';
import EntradasCardObject from './components/EntradasCard'

import {
    MasterContainer,
    Button,
    Container,
    Label,
    EntradasFormAlign
} from '../entradas/EntradasPageStyle'
import './entradasFormFormik.css'

const EntradasPage = () => {

    const [entradas, setEntradas] = useState([])

    const fkUsuarioId = localStorage.getItem("user_id")


    const entradasInitialValues = {
        nome: '',
        valor: '',
        data: '',
        fkUsuarioId
    }

    const getNewEntradas = useCallback(async () => {
        let entradasResponse = await api.get(`entradas/${fkUsuarioId}`)
        setEntradas(entradasResponse.data)
    },[])

    useEffect(() => {
        getNewEntradas()  
    },[])


   async function onSubmit (values, action) {
       let registerEntradas = await api.post("entradas", values)
       let getEntradas = await getNewEntradas()
       action.resetForm()
   } 

    return (
        <MasterContainer>

            <MenuLateral /> 
            <UserBar />
                    <Container>  
                        <EntradasFormAlign>

                                        <h1>Cadastro de Entradas</h1>
                                    <Formik
                                            onSubmit={onSubmit}
                                            initialValues={entradasInitialValues}
                                            validationSchema={schemaEntradas}     
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
                            </EntradasFormAlign>
                                        
                                <EntradasCardObject entradas={{entradas}} getentradas={getNewEntradas} />
                    </Container>  


        </MasterContainer>
    );
}

export default EntradasPage;
