import styled from "styled-components";

export const MasterContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color:  #EFEFEF;
    width: 100vw;
    font-family: 'Roboto', sans-serif;
`
export const ColumnTwo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 7%; 
    align-items: center;
`
export const MarginResumo = styled.div`
    margin-bottom: 40px;
    text-align: center;
`
export const RegistroDespesas = styled.div`
    background-color: white;
    width: 80%;
    height: 15vh;
    margin: 10px 0;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
export const EstiloInput = styled.div`
    width: 30%;
    margin: 0 10px;
    display: flex;
    line-height: 2;
    flex-direction: column;
    align-items: center;
    font-weight: 700;
    
`

export const TransactionHistory = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 20px;
    margin: 15px;
    margin-top: 0px;
    padding: 20px 24px;
    height: 430px;

`

export const MarginHistorico = styled.div`
    margin-bottom: 20px;
`
export const PaymentHistory = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    align-items: flex-start;
    background-color: white;
    font-size: 16px;
`


export const LabelFormTransacoes = styled.label`
`
export const InputFormTransacoes = styled.input`
    width: 80%
`
export const Button = styled.button`
    border: none;
    border-radius: 10%;
    :hover{
        background-color: #5CBA9B;
        transition: 0.5s;
    }
`
export const Select = styled.select`
`



