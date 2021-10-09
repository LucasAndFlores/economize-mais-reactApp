import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import InitialPage from './components/noLogged/home/InitialPage';
import LoginPage from './components/noLogged/login/LoginPage';
import Registerpage from './components/noLogged/register/RegisterPage';
import TransacoesPage from './components/logged/transacoes/TransacoesPage';
import Homeapp from './components/logged/homeApp/HomeApp';
import Configpage from './components/logged/configuracoes/ConfigPage';
import Cartoespage from './components/logged/cartoes/CartoesPage';
import Loader from './shared/components/loader'

import './font.css'

function App() {
    return (
        <Router>

            <Switch>
                <Route path="/" exact component={InitialPage} />
                <Route path="/login" exact component={LoginPage} />
                <Route path="/cadastro" exact component={Registerpage} />
                <Route path="/transacoes" exact component={TransacoesPage} />
                <Route path="/home" exact component={Homeapp} />
                <Route path="/configuracoes" exact component={Configpage} />
                <Route path="/cartoes" exact component={Cartoespage} />
                <Route path="/loader" exact component={Loader} />
            </Switch>

        </Router>
    );
}

export default App;

