import styled from "styled-components";

export const HeaderStyling = styled.nav`
    display: flex;
    flex-direction: row;
    width: 80%;
    height: 13vh;
    color: black;
    font-size: 1.5em;
    border-radius: 55px;
    background-color: #EFF7E1;


`

export const NavTextBar = styled.div`
    display: flex;
    flex-direction: row; 
    width: 100%;
    align-items: center;
    justify-content: space-evenly;

`

export const ButtonStartNow = styled.button`
    background-color: #5CBA9B;    
    color: white;
    border-radius: 55px;
    font-size: 1em;
    padding: 0% 5%;
    border: none;
    height: 10vh;

    :hover{
        background: #495BFA;
        transition: .3s;
        opacity: 0.7;
        cursor: pointer;
    }
`