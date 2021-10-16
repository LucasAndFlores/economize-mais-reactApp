import React, {useCallback, useState, useEffect} from 'react';
import { api } from '../../../../../services/api';
import {
    MainContainer,
    TabelaGastos
} from './styles'

const TransactionTableHome = () => {
    const fkUsuarioId = localStorage.getItem("user_id")

    const [transactionsHome, setTransactionsHome] = useState([])

    const apiGetTransactions = useCallback( async () => {
        let response = await api.get(`transacoes/${fkUsuarioId}`)
        setTransactionsHome(response.data)
    },[])

    useEffect(() => {
        apiGetTransactions()
    },[])


    return (
        <MainContainer>

            <h2> Historico de transacoes </h2>

        <TabelaGastos>
            <thead>
                <tr>
                    <th> Loja </th>
                    <th> Meio de pagamento </th>
                    <th> Data </th>
                    <th> Total </th>
                </tr>
            </thead>
            
            <tbody>
                {transactionsHome.map( object => (

                    <tr key={object.id}>
                        <td>
                            {object.loja}
                        </td>
                        <td>
                            {object.meioPagamento}
                        </td>
                        <td>
                            {object.dataTransacao}
                        </td>
                        <td>
                            R$ {object.valor}
                        </td>
                    </tr>
                )                          
                )
                }
            </tbody>
            
        </TabelaGastos>

  </MainContainer>
    );
}

export default TransactionTableHome;
