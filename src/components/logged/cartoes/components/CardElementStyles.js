import styled from "styled-components";

export const CardContainer = styled.div`
    width: 50%;
    height: 45vh;
    border-radius: 20px;
    background-color: #820ad1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-wrap:column;
`

export const CardInfos = styled.p`
    font-size: 1.2em;
    color: white;
    margin: 0 0 3% 15%;
`

export const RemoveButton = styled.button`
  background-color: #820ad1;
  border-style: none;
  margin: 2% 0 0 88%;  
  width: 10%;  
`

export const EditButton = styled.button`
  background-color: #820ad1;
  border-style: none;
  margin: 2% 0 0 -18%;  
`