import React,{useCallback, useEffect, useState} from 'react';
import { api } from '../../../../../services/api';
import {
    MainContainerCards,
    CreditCardContainer,
    DebitCardContainer,
    CardAlign,
    IconCard,
    SpentCard,
    TitleCard,
    TitleContainer
} from './styles'
import { CreditCardFill } from '@styled-icons/bootstrap/CreditCardFill'
import { CashCoin } from '@styled-icons/bootstrap/CashCoin'


const SpendByType = () => {
    const [alltransactions, setAllTransactions] = useState([]) 
    const [debit, setDebit] = useState()
    const [credit, setCredit] = useState()
    const fkUsuarioId = localStorage.getItem("user_id")

    const totalTransaction = useCallback(async () => {
        let response = await api.get(`transacoes/${fkUsuarioId}`)
        let debito = 0
        let credito = 0
        response.data.forEach(e => {
            if(e.meioPagamento === "crédito") {
                credito += parseFloat(e.valor)
            }
            if(e.meioPagamento === "débito") {
                debito += parseFloat(e.valor)
            }
            
        })
        setDebit(debito)
        setCredit(credito)
        setAllTransactions(response.data)
    },[])




    useEffect(() => {
        totalTransaction()
    },[])




    return (
        <>
        <TitleContainer> Gasto por tipo de cartão </TitleContainer>
         <MainContainerCards>
             <DebitCardContainer>
                    <CardAlign>
                            <IconCard>
                                <CashCoin size="50" />
                            </IconCard>
                            <TitleCard>
                                Total gasto no débito
                            </TitleCard>
                            <SpentCard>
                                R$ {debit}
                            </SpentCard>
                    </CardAlign>
             </DebitCardContainer>
             <CreditCardContainer>
                <CardAlign>
                                <IconCard>
                                    <CreditCardFill size="50" />
                                </IconCard>
                                <TitleCard>
                                    Total gasto no crédito
                                </TitleCard>
                                <SpentCard>
                                    R$ {credit}
                                </SpentCard>
                        </CardAlign>
             </CreditCardContainer>
         </MainContainerCards>
        </>
    );
}

export default SpendByType;
