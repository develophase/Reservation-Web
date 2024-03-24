// import "bootstrap/dist/css/bootstrap.min.css"
import './App.scss';
import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));
// Pages
const Login = React.lazy(() => import('./screens/login/Login'));

class App extends Component {
  render() { 
    return (
      <HashRouter>
        <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
              <Route path="/" name="Home" render={props => <DefaultLayout {...props} />} />
            </Switch>
        </React.Suspense>
      </HashRouter>
    )
  }
}

export default App