import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 20px;
    box-sizing: border-box;
    width: 90%;
    height: 100%;
    padding: 30px;
    `
export const GoalContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    flex-direction: column;
    overflow: scroll;
`

export const GoalTitle = styled.div`
    font-size: 1.3;
    font-weight: bold;
    margin-left: 3px;
    display: flex;
`


export const GoalCardOne = styled.div`
    width: 80%;
    height: 169px;
    background-color: white;
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    padding: 20px;
    box-shadow: 0px 16px 24px rgb(0 0 0 / 6%), 0px 2px 6px rgb(0 0 0 / 4%), 0px 0px 1px rgb(0 0 0 / 4%);
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin: 10px 0;
    border: 1px solid black;
`

export const DivCard = styled.div`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
`

export const IdOne = styled.h3`
    box-sizing: border-box;
`

export const Paragraph = styled.p`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
`

export const RemoveButton = styled.button`
    border: 2px solid #5CBA9B;
    background-color: white;
    border-radius: 50px;
    cursor: pointer;
    padding: 10px;
`

