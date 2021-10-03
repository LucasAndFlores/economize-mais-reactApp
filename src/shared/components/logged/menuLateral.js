import React from 'react';
import { BackgroundContainerStyle } from '../../../shared/styles/styleBackground';
import { MenuGeral, 
        MenuModulos,
        ItemMenu,
        TextoMenu
        } from '../../../shared/components/logged/menuLateralStyle'

const MenuLateral = () => {
    return (
        <BackgroundContainerStyle>
            <MenuGeral>              
                <MenuModulos>
                    <ItemMenu onclick="location.href='/index/'">                      
                        <TextoMenu> Visão geral </TextoMenu>
                    </ItemMenu>
                    <ItemMenu>
                        <TextoMenu> Transações </TextoMenu>
                    </ItemMenu>
                    <ItemMenu onclick="location.href='/index/cartoes'">                
                        <TextoMenu> Cartões </TextoMenu>
                    </ItemMenu>
                    <ItemMenu onclick="location.href='/index/entradas'">                       
                        <TextoMenu> Entradas </TextoMenu>
                    </ItemMenu>
                    <ItemMenu onclick="location.href='/index/objetivos'">                     
                        <TextoMenu> Objetivos </TextoMenu>
                    </ItemMenu>
                    <ItemMenu onclick="location.href='/index/configuracoes'">                      
                        <TextoMenu> Configurações </TextoMenu>
                    </ItemMenu>
                </MenuModulos>
            </MenuGeral>
        </BackgroundContainerStyle>
    );
}

export default MenuLateral;
