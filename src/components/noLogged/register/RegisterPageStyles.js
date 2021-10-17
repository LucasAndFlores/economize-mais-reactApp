import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    height: 120vh;
    background-color: #67bea1 ;
    display: flex;
    flex-direction: row;
`

export const LeftContainer = styled.div `
    width: 50%;
    height: 110vh; 
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const RightContainer = styled.div `
    width: 50%;
    height: 110vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const WelcomeText = styled.h2 `
    font-weight: bold;
    color: white;
`
export const LabelForm = styled.label `
    font-size: 1.3;
    font-weight: bold;
    margin: 10px 0;

`

export const RegisterButton = styled.button `
    font-size: 1.5em;
    color: white;
    background-color: #214151;
    padding: 2% 5%;
    border-radius: 55px;
    margin-top: 5%;
    cursor: pointer;
`

export const ImgRightContainer = styled.img `
    width: 80%;
    height: 80vh
`

export const TesteAlinhamento = styled.div`
    display: flex;
    height: 100vh;
    width: 60;
`