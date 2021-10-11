import React, {useContext} from 'react';
import {
    UserBarContainer,
    TextUserWelcome
} from './UserBarStyles'
import {UserAlt} from '@styled-icons/fa-solid'
import {Email} from '@styled-icons/material/Email'
import {Bell} from '@styled-icons/evaicons-solid/Bell'
import { AuthContext } from '../../../../contexts/auth'
import { useHistory } from "react-router";

const UserBar = () => {

    const history = useHistory()

    const { setAuthenticated } = useContext(AuthContext)

    function handleLogout () {
        setAuthenticated(false)
        localStorage.removeItem('token')
        history.push('/login')
    }

    let userName = localStorage.getItem('user_name')
   

    return (
        <UserBarContainer>
            <UserAlt size="30" />
            <TextUserWelcome>
                Olá {userName}, seja bem vindo
            </TextUserWelcome>
            
            <Email size="30" />
            <Bell size="30" />
            <button type="button" onClick={handleLogout}>Logout</button>
        </UserBarContainer>
    );
}

export default UserBar;
