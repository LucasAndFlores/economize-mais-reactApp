import React from 'react';
import MenuLateral from '../../../shared/components/logged/menuLateral';

import {
    MasterContainer,
    Main,
    MainSection,
    MainSectionH1,
    ImgHero,
    MainArticle,
    ArticleDiv

} from '../entradas/EntradasPageStyle'

import controleFinanceiro from '../../../shared/img/controle-financeiro.jpg'
import budget from '../../../shared/img/budget 1.png'

const EntradasPage = () => {
    return (
        <MasterContainer>
            <MenuLateral />
            <Main>
                <MainSection>
                    <MainSectionH1>Não sabe para onde seu dinheiro está indo? Conheça a Economize+</MainSectionH1>
                </MainSection>
                <MainSection>
                    <ImgHero src={controleFinanceiro} alt=""></ImgHero>
                </MainSection>
                <MainArticle>
                    <MainSection>
                        <ArticleDiv>
                            <img src={budget} alt=""></img>
                        </ArticleDiv>
                        <p>50% da população brasileira não controla seu dinheiro</p>
                        <ArticleDiv>
                            <img src={budget} alt=""></img>
                        </ArticleDiv>
                        <p>50% da população brasileira não controla seu dinheiro</p>
                    </MainSection>
                </MainArticle>

            </Main>
        </MasterContainer>
    );
}

export default EntradasPage;
