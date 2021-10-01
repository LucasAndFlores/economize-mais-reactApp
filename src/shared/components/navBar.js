import React from 'react';
import { HeaderStyling,NavTextBar, ButtonStartNow } from './navBarStyles';
import logo from '../img/logo_economize.jpg'

const NavBarHome = () => {
    return (
        <HeaderStyling>
     
            <NavTextBar>
            <p>Quem somos</p>
            <p>Contato</p>
            <p>Depoimentos</p>                            
            <ButtonStartNow type="button">Comece Agora</ButtonStartNow>
            </NavTextBar>
            
        </HeaderStyling>
    );
}

export default NavBarHome;
