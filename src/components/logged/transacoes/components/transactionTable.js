import React,{useState, useEffect, useCallback} from 'react';
import {Edit} from '@styled-icons/fa-solid/Edit'
import PutModal from './PutModal';

import {
    TabelaGastos,
    MainContainer,
} from './transactionTablelStyle'


const TransactionTable = (props) => {
    const [selectedElement, setSelectedElement ] = useState()
    const [show, setShow] = useState(false)

    const handleShow = useCallback(() => {
        setShow(!show)
        console.log('erro no handle show')
    }, [])

    const handleClick = useCallback((e, object) => { 
            e.preventDefault()
            setSelectedElement(object)
            handleShow()
            console.log('erro no handle click')
    },[])


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
                                   <button type="button" onClick={(e) => handleClick(e,object)} > <Edit size="20"/> <PutModal putrefference={selectedElement} open={show} /> </button>
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
