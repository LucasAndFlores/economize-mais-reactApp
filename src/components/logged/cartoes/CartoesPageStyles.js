import styled from 'styled-components'

export const MainContainer = styled.div`
    width: 80%;
    height: 90vh;
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 18%;
    right: 1%;
`
export const LeftContainer = styled.div `
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const RightContainer = styled.div `
    width: 50%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Form = styled.div`
    width: 80%;
    height: 95vh;
    background-color: white;
    border-radius: 55px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.2);
`
export const RegisterWelcome = styled.h3`
    font-weight: bold
`

export const CardLabel = styled.label `
    font-size: 1.3;
    margin: 10px 0;
`

export const CardInput = styled.input `
    width: 40%;
    height: 6vh; 
`
export const CardSelect = styled.select `
    width: 40%;
    height: 6vh; 
`

export const CardRegister = styled.button `
    margin: 4% 0;
    font-size: 1.5em;
    color: white;
    background-color: #214151;
    padding: 2% 5%;
    border-radius: 55px;
    cursor: pointer;
`