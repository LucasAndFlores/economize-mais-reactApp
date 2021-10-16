import React from 'react';
import { api } from '../../../../../services/api';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import schemaTransaction from '../../schemaTransaction'
import reactDom from 'react-dom';
import {
    MainContainer,
    ModalStyle

} from './styles'
import './formPutStyles.css'

const PutModal = (props) => {

    const isOpen = props.open

    const autoClose = props.setshow

    const refreshTransaction = props.refreshtransaction

    const transactioID = props.putrefference.id

    if (isOpen === false) {
        return null
    } 
    // console.log(props)
    // console.debug("objeto passado", props.putrefference)

    const transactionActualValues = {
        loja: props.putrefference.loja,
        dataTransacao: props.putrefference.dataTransacao,
        valor: props.putrefference.valor,
        meioPagamento: props.putrefference.meioPagamento,
        fkCategoriaId: props.putrefference.fkCategoriaId,
        fkUsuarioId: props.putrefference.fkUsuarioId
    }

    async function onSubmit (values, action) {
        let updateTransaction = await api.put(`transacoes/${transactioID}`, values)
        refreshTransaction()
        autoClose()
    }

    return reactDom.createPortal(
        <>
        <MainContainer>
            <ModalStyle>
            <Formik   
                                onSubmit={onSubmit}
                                validationSchema={schemaTransaction}
                                initialValues={transactionActualValues}
                                > 

                                    {({values, errors, touched}) => (


                                        <Form className="formPutStyles">

                                            <label htmlFor="loja"> Loja </label>
                                            <Field type="text" name="loja" />
                                            <ErrorMessage name="loja"/>


                                            <label> Data da despesa </label>
                                            <Field type="date" name="dataTransacao" />
                                            <ErrorMessage name="dataTransacao"/>





                                            <label htmlFor="loja"> Meio de pagamento </label>
                                            <Field name="meioPagamento" as="select" >
                                                    <option value="débito"> Débito </option>
                                                    <option value="crédito"> Crédito </option>
                                            </Field>
                                            <ErrorMessage name="meioPagamento"/>




                                            <label htmlFor="loja"> Valor da despesa </label>
                                            <Field type="number" name="valor" />
                                            <ErrorMessage name="valor"/>



                                            <label htmlFor="loja"> Categoria </label>
                                            <Field name="fkCategoriaId" as="select" >
                                                <option value={1}> aluguel </option>
                                                <option value={1}> teste </option>
                                            </Field>
                                            <ErrorMessage name="fkCategoriaId"/>


                                            <button type="submit" >
                                                    Atualizar
                                            </button>
                                            </Form>


                                    )}                            
                            </Formik>  
            </ModalStyle>
        </MainContainer>
        </>,
        document.getElementById('portal')
    );                                                                          
}

export default PutModal;
