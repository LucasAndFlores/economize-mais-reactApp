import styled from "styled-components";

export const MasterContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color:  #EFEFEF;
    width: 100%;
    height: 110vh;
    font-family: 'Roboto', sans-serif;
`

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin-top: 10%;
    margin-left: 5%;
    display: flex;
    flex-direction: row;
`

export const EntradasFormAlign = styled.div`
    height: 80vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`


export const Label = styled.label`
    font-size: 1rem;
    font-style: bold;
    font-weight: bold;
`

export const Button = styled.button`
    background-color: #5CBA9B;
    color: white;
    border-radius: 55px;
    font-size: 1.5rem;
    padding: 2% 5%;
    border: none;
    margin-top: 3%;

    :hover{
        background: #495BFA;
        transition: 0.3s;
        opacity: 0.7;
        cursor: pointer;
    }
`
