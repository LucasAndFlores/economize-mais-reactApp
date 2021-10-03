import styled from "styled-components";

export const MenuGeral = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 15%;
    margin-top: 20px;
`

export const MenuModulos = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`

export const ItemMenu = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 12px;
    padding: 12px 15px;
    border: none;
    cursor: pointer;
    background-color: #E5E5E5;
    font-weight: bold;
    font-size: 14px;

    :hover{
        background-color: #5CBA9B;
        transition: 0.5s;
    }
`

export const TextoMenu = styled.text`
    font-size: 14px;
    margin-left: 18px;
    text-align: left;
`