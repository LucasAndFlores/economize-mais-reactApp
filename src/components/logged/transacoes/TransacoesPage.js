import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import schemaTransaction  from './schemaTransaction'
import MenuLateral from '../../../shared/components/logged/menuLateral';
import TransactionTable from './components/transactionTable';
import { api } from '../../../services/api';
import UserBar from '../../../shared/components/logged/UserBar/UserBar';
import {
    MasterContainer,
    ColumnTwo,
    MarginResumo,
    EstiloInput,
    LabelFormTransacoes,
    InputFormTransacoes,
    TransactionHistory,
    Button,
    Select,
    MarginHistorico,
    PaymentHistory,
    

} from '../transacoes/TransacoesPageStyle'
import './TransactionFormFormik.css'

import adicionar from '../../../shared/img/add.png'

const TransacoesPage = () => {

    const fkUsuarioId = localStorage.getItem("user_id")

    const transactionInitialValues = {
        loja: '',
        dataTransacao: '',
        valor: '',
        meioPagamento: "",
        fkCategoriaId: '',
        fkUsuarioId
    }
    
    async function onSubmit (values, action) {
        console.log(values)
        const registredTransactions = await api.post("transacoes", values)
        console.log(registredTransactions)
        // action.resetForm()
    }
    return (
        <MasterContainer>
            <MenuLateral />
            <UserBar />
            <ColumnTwo>
                <MarginResumo>
                    <h1> Cadastre já suas despesas </h1>
                    <h4>Aqui você vai cadastrar tudo que gasta, para controlar o seu gasto.</h4>
                </MarginResumo>
                            <Formik    
                                onSubmit={onSubmit}
                                validationSchema={schemaTransaction}
                                initialValues={transactionInitialValues}
                                > 

                                    {({values, errors, touched}) => (


                                        <Form className="transactionForm">
                                            <EstiloInput>
                                            <LabelFormTransacoes htmlFor="loja"> Loja </LabelFormTransacoes>
                                            <Field type="text" name="loja" placeholder="Digite aqui onde você comprou" />
                                            <ErrorMessage name="loja"/>
                                            </EstiloInput>

                                            <EstiloInput>
                                            <LabelFormTransacoes> Data da despesa </LabelFormTransacoes>
                                            <Field type="date" name="dataTransacao" />
                                            <ErrorMessage name="dataTransacao"/>
                                            </EstiloInput>



                                            <EstiloInput>
                                            <LabelFormTransacoes htmlFor="loja"> Meio de pagamento </LabelFormTransacoes>
                                            <Field name="meioPagamento" as="select" >
                                                    <option value="débito"> Débito </option>
                                                    <option value="crédito"> Crédito </option>
                                            </Field>
                                            <ErrorMessage name="meioPagamento"/>
                                            </EstiloInput>


                                            <EstiloInput>
                                            <LabelFormTransacoes htmlFor="loja"> Valor da despesa </LabelFormTransacoes>
                                            <Field type="number" name="valor" />
                                            <ErrorMessage name="valor"/>
                                            </EstiloInput>

                                            <EstiloInput>
                                            <LabelFormTransacoes htmlFor="loja"> Categoria </LabelFormTransacoes>
                                            <Field name="fkCategoriaId" as="select" >
                                                <option value={1}> aluguel </option>
                                                <option value={1}> teste </option>
                                            </Field>
                                            </EstiloInput>
                                            <ErrorMessage name="fkCategoriaId"/>


                                            <EstiloInput>
                                            <Button type="submit" >
                                            <img src={adicionar} alt="adicionarIcone" width="40px" height="40px"></img>
                                            </Button>
                                            </EstiloInput>
                                            </Form>











                                    )}
                                       
                            
                            
                            
                            
                            </Formik>  


                <TransactionHistory>
                    <MarginHistorico>
                        <h2>Histórico de transações</h2>
                        <PaymentHistory>
                            <TransactionTable />
                        </PaymentHistory>
                    </MarginHistorico>
                </TransactionHistory>
            </ColumnTwo>
        </MasterContainer>
    );
}

export default TransacoesPage;
