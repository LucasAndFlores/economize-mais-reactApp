import styled from "styled-components";

export const MainContainer = styled.div`
    height: 50vh;
    width: 100%;
    overflow: auto;
    border-radius: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TabelaGastos = styled.table`
    width: 100%;
    text-align: left;
    border-collapse: collapse;
    background-color: white;
    border-radius: 10px;

    tr {
     border-bottom: 1px solid #c2c2c2;
     height: 7vh;
     
    }
`
