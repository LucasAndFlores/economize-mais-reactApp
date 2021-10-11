import styled from "styled-components";

export const MasterContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color:  #EFEFEF;
    width: 100vw;
`
export const Container = styled.div`

    background-color: white;
    border-radius: 20px;
    padding: 20px;

    width: 40%;
`
export const TitleDiv = styled.div`
    display: flex;
    margin-bottom: 18px;
`
export const Form = styled.div`
    flex-grow: 1;
    
`
export const FormInputs = styled.div`
    margin-left: 0%;
    display: flex;
    flex-direction: column;
    justify-content: center;

`
export const Label = styled.label`
    font-size: 1rem;
    font-style: bold;
    font-weight: bold;
`

export const Input = styled.input`
    width: 333.87px;
    height: 41.69px;
    font-size: 16px;
    padding-left: 16px;
`

export const Button = styled.button`
    background-color: #5CBA9B;
    color: white;
    border-radius: 55px;
    font-size: 1.5rem;
    padding: 2% 5%;
    border: none;

    :hover{
        background: #495BFA;
        transition: 0.3s;
        opacity: 0.7;
        cursor: pointer;
    }
`

export const TabelaEntradas = styled.table`
    width: 100%;
    height: 140px;
    text-align: left;
    border-collapse: collapse;
`

export const H1 = styled.h1`
`
