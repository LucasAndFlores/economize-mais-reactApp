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