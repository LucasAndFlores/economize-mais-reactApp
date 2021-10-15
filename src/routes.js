import React, { useContext } from 'react';

import {
    Route,
    Switch,
} from 'react-router-dom';

import InitialPage from './components/noLogged/home/InitialPage'
import LoginPage from './components/noLogged/login/LoginPage';
import Registerpage from './components/noLogged/register/RegisterPage';
import TransacoesPage from './components/logged/transacoes/TransacoesPage';
import Homeapp from './components/logged/homeApp/HomeApp';
import Configpage from './components/logged/configuracoes/ConfigPage';
import Cartoespage from './components/logged/cartoes/CartoesPage';
import Loader from './shared/components/loader'
import EntradasPage from './components/logged/entradas/EntradasPage';
import ObjetivosPage from './components/logged/objetivos/ObjetivosPage';
import PutModal from './components/logged/transacoes/components/PutModal';

import { AuthContext } from './contexts/auth';

function LoggedRouter ({ isPrivate, ...rest }) {
    
    const { loading, authenticated } = useContext(AuthContext)

    if (isPrivate && !authenticated ) {
        return <h2>Não autenticado </h2>
    }

    if (loading) {

        return <Loader />
    }

    return <Route {...rest} />

}

export default function Routes() {
    return (
    <Switch>

        <Route path="/" exact component={InitialPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/cadastro" exact component={Registerpage} />
        <LoggedRouter isPrivate path="/home" exact component={Homeapp} />
        <LoggedRouter isPrivate path="/transacoes" exact component={TransacoesPage} />
        <LoggedRouter isPrivate path="/transacoes/editar" exact component={PutModal} />
        <LoggedRouter isPrivate path="/cartoes" exact component={Cartoespage} />
        <LoggedRouter isPrivate path="/entradas" exact component={EntradasPage} />
        <LoggedRouter isPrivate path="/objetivos" exact component={ObjetivosPage} />
        <LoggedRouter isPrivate path="/configuracoes" exact component={Configpage} />
        <LoggedRouter isPrivate path="/loader" exact component={Loader} />

    </Switch>
    )
}