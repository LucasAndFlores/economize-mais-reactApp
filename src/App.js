import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import InitialPage from './components/noLogged/home/InitialPage';
import TransacoesPage from './components/Logged/transacoes/TransacoesPage';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={InitialPage} />
                <Route path="/transacoes" component={TransacoesPage} />
            </Switch>
        </Router>
    );
}

export default App;

