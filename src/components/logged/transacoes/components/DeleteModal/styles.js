import styled from "styled-components";

export const MainContainer = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background-color: rgba(0,0,0,0.5);
   z-index: 1000;
   font-family: 'Roboto', sans-serif;
`

export const ModalStyle = styled.div `
    position: fixed;
    width: 40%;
    height: 60vh;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   background-color: #fff;
   padding: 50px;
   z-index: 1000;
   display: flex;
   justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const LineButtons = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`
export const YesButton = styled.button`
    background-color: #ED4222;
    border: none;
    color: white;
    width: 100px;
    height: 7vh;
    border-radius: 22px;
    cursor: pointer;
`

export const NoButton = styled.button`
    background-color: white;
    border: 3px solid red;
    color: #ED4222;
    width: 100px;
    height: 7vh;
    width: 18%;
    height: 7vh;
    border-radius: 22px;
    cursor: pointer;
`

export const CloseModal = styled.button `
    position: fixed;
    bottom: 80%;
    left: 68%;
    z-index: 2000;
    background-color: white;
    border: none;
    cursor: pointer;
`