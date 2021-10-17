import React,{useState, useCallback} from 'react';
import {Edit} from '@styled-icons/fa-solid/Edit'
import {Trash} from '@styled-icons/fa-solid/Trash'
import PutModal from './PutModal';
import DeleteModal from './DeleteModal'

import {
    TabelaGastos,
    MainContainer,
} from './transactionTablelStyle'


const TransactionTable = (props) => {

    const transaction = props.transactions.transactions

    const [selectedElement, setSelectedElement ] = useState()
    const [show, setShow] = useState(false)
    const [operation, setOperation] = useState(false)

    function autoClose () {
        setShow(false)
    }

    const handleShow = useCallback(() => {
        setShow(!show)
    }, [])

    const handleClick = useCallback((e, object) => { 
            e.preventDefault()
            setSelectedElement(object)
            handleShow()
    },[handleShow])
    

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
                        {transaction.map(object => (

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
                                   <button type="button" onClick={(e) => {handleClick(e,object); setOperation(false)}} > <Edit size="20"/>  </button>
                                   {show && !operation && <PutModal putrefference={selectedElement} setshow={autoClose} refreshtransaction={props.gettransactions}   />}
                                </td>

                                <td>
                                    <button type="button" onClick={(e) => {handleClick(e,object); setOperation(true)}} > <Trash size="20"/>  </button>
                                    {show && operation && <DeleteModal deleterefference={selectedElement}  setshow={autoClose} refreshtransaction={props.gettransactions}   />}
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
