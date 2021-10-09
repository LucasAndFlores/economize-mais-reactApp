import React from 'react';


import {
    TabelaGastos
} from '../../../shared/components/logged/transactionTablelStyle'


const TransactionTable = () => {
    return (
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
                </tbody>
            </TabelaGastos>
    );
}

export default TransactionTable;
