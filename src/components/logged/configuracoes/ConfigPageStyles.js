import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    height: 120vh;
    background-color: #67bea1 ;
    display: flex;
    flex-direction: row;
`

export const LeftContainer = styled.div `
    width: 100%;
    height: 80vh; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

`

export const WelcomeText = styled.h2 `
    font-weight: bold;
    color: white;
`
export const LabelForm = styled.label `
    font-size: 1.3;
    font-weight: bold;
    margin: 10px 0;
    color: white;

`

export const InputForm = styled.input `
    width: 40%;
    height: 6vh; 
`
export const RegisterButton = styled.button `
    font-size: 1.5em;
    color: white;
    background-color: #214151;
    padding: 2% 5%;
    border-radius: 55px;
    cursor: pointer;
`

export const AlignInputLabel = styled.div`
    height: 10vh;
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`