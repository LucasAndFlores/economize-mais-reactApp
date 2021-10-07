import React from 'react';
import {
    UserBarContainer,
    TextUserWelcome
} from './UserBarStyles'
import {UserAlt} from '@styled-icons/fa-solid'
import {Email} from '@styled-icons/material/Email'
import {Bell} from '@styled-icons/evaicons-solid/Bell'

const UserBar = () => {
    return (
        <UserBarContainer>
            <UserAlt size="30" />
            <TextUserWelcome>
                Olá user.name, seja bem vindo
            </TextUserWelcome>
            
            <Email size="30" />
            <Bell size="30" />
        </UserBarContainer>
    );
}

export default UserBar;
