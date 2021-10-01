import React from 'react';
import NavBarHome from '../../../shared/components/navBar';
import {
    RowContainer,
    RowItem,
    ImgSize, 
    MainImageCenter,
    TitleCenter,
    HeaderContainer,
    LogoStyle
} from './initialPageStyle'
import { BackgroundContainerStyle } from '../../../shared/styles/styleBackground';

import controlFinance from '../../../shared/img/controle-financeiro.jpg'
import budget from '../../../shared/img/budget 1.png'
import leverage from '../../../shared/img/leverage 1.png'
import power from '../../../shared/img/power 1.png'
import logo from '../../../shared/img/logo_economize.jpg'


const InitialPage = () => {
    return (
        <BackgroundContainerStyle>
            <HeaderContainer>
            <LogoStyle src={logo} alt="logo-economize-mais"/>
            <NavBarHome />
            </HeaderContainer>
            
            <TitleCenter>Não sabe para onde seu dinheiro está indo? Conheça a Economize+</TitleCenter>
            <MainImageCenter class="img-hero" src={controlFinance} alt="controle financeiro"/>


            <RowContainer>
            
            <RowItem>
            <ImgSize src={budget} alt=""/>
            <p>50% da população brasileira não controla seu dinheiro</p>
            </RowItem>

            <RowItem>    
            <ImgSize src={leverage} alt=""/>
            <p>O economize+ vem pra facilitar sua vida com o dinheiro</p>
            </RowItem>

            <RowItem> 
            <ImgSize src={power} alt=""/>
            <p>Se você não sabe por onde começar, clique em comece agora e vamos ajudar</p>
            </RowItem>
            </RowContainer>
            
        </BackgroundContainerStyle>
    );
}

export default InitialPage;
