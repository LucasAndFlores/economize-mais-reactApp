import styled from "styled-components";

export const Container = styled.div`
    width: 50%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
`
export const EntradasCard = styled.div`
    background-color: white;
    border-radius: 15px;
    width: 80%;
    height: 100px;
    display: flex;
    flex-direction: row;
    margin: 10px 0;
`
export const MoneyIcon = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const EntradasInfo = styled.div`
    height: 100%;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

`

export const EntradaAlign = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 10px;
`

export const EntradaLabel = styled.p`
    font-weight: bold;
    margin: 0
`
export const EntradaData = styled.p`
    font-size: 1em;
    margin: 0 0 0 3%
`

export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

export const Button = styled.button`
    border: 2px solid #5CBA9B;
    background-color: white;
    border-radius: 50px;
    cursor: pointer;
`