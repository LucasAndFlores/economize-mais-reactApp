import React,{useState, useEffect, useCallback} from 'react';
import { api } from '../../../../services/api';
import {Edit} from '@styled-icons/fa-solid/Edit'
import PutModal from './PutModal';

import {
    TabelaGastos,
    MainContainer,
} from './transactionTablelStyle'


const TransactionTable = (props) => {
    const [open, setOpen] = useState(false)
    const [close, setClose] = useState(true)




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
                        {props.transactions.transactions.map(object => (

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
                                   <button type="button"  onClick={() => setOpen(true)} > <Edit size="20"/> <PutModal putrefference={object} open={open} /> </button>
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
