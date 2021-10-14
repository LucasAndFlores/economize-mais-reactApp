import React, {useState, useEffect} from 'react';
import { BackgroundContainerStyle } from '../../../../shared/styles/styleBackground';

import { api } from '../../../../services/api'

import {
    TabelaGastos,
    MainContainer,
} from './transactionTablelStyle'


const TransactionTable = () => {
    const [transactions, setTransactions] = useState([])

    const fkUsuarioId = localStorage.getItem("user_id")

    useEffect (() => 
      
        api.get(`transacoes/${fkUsuarioId}`).then(
            (results) => setTransactions(results.data)
        )

    ,[transactions]) 





    return (
            <MainContainer>
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
                        {transactions.map(object => (

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

                                <td>
                                   <button>Teste</button>
                                </td>

                                <td>
                                    teste 2
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

export default TransactionTable;
