import React from 'react';
import { useHistory } from 'react-router-dom';
import { HeaderStyling,NavTextBar, ButtonStartNow } from './navBarStyles';

const NavBarHome = () => {

    const history = useHistory();

    return (
        <HeaderStyling>
     
            <NavTextBar>
            <p>Quem somos</p>
            <p>Contato</p>
            <p>Depoimentos</p> 
                   
            <ButtonStartNow onClick={() => {
                history.push('/login')
            }} type="button">Comece Agora</ButtonStartNow>

            </NavTextBar>
            
        </HeaderStyling>
    );
}

export default NavBarHome;
