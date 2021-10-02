import React from 'react';
import InitialPage from './components/noLogged/home/InitialPage';
import LoginPage from './components/noLogged/login/LoginPage';
import Registerpage from './components/noLogged/register/RegisterPage';
import { BrowserRouter as Router,
  Switch, 
  Route
 } from 'react-router-dom'; 
import './font.css'

function App() {
  return (
    <Router>

      <Switch>
      <Route path="/" exact component={InitialPage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/cadastro" exact component={Registerpage} />
      </Switch>

    </Router>
  );
}

export default App;
