import styled from "styled-components";

export const ContainerMain = styled.div `
    margin-top: 5%;
    width: 100%;
    height: 110vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
`
export const ContainerLeft = styled.div `
    width: 50%;
    height: 110vh;
    display: flex;
    flex-direction: column;
`

export const ContainerRight = styled.div `
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`

export const ImageLogin = styled.img `
    width: 100%;
    height: 110vh;
`
export const ProfileIcon = styled.div `
    width: 100%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const FormContainer = styled.div `
    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

`

export const LabelFormLogin = styled.label `
    width: 30%;
    font-weight: bold;
    font-size: 1.5em;
`

export const InputFormLogin = styled.input `
    background-color: white;
    width: 60%;
    height: 5vh;
`


export const ButtonsContainer = styled.div`
    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

`

export const TextOfButtons = styled.h3 `
    font-size: 1.2em;
`
export const Buttons = styled.button `
    color: white; 
    border-radius: 25px;
    background-color: #5CBA9B;
    font-size: 1.2em;
    font-weight: bold;
    border: 2px;
    height: 5vh;
    width: auto;
    cursor: pointer
`