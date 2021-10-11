import React from 'react';

import {
   Router
} from 'react-router-dom';


import { AuthProvider } from './contexts/auth';
import Routes from './routes';
import history from './history';


import './font.css'

function App() {
    return (
        <AuthProvider>
            <Router history={history}>
                <Routes />
            </Router>
        </AuthProvider>
    );
}

export default App;

