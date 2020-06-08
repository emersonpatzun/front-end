import React from 'react';
import 'antd/dist/antd.css';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter} from 'connected-react-router';
import { Provider } from 'react-redux';
import { configureStore, history } from './Store/store';
import MainLayout from './assets/containers/MainLayout';
import Login from './assets/routes/login/Login'; 

function App() {
  return (
    <Provider store =  {configureStore()}>
      <ConnectedRouter history = { history }>
        <Switch>
          <Route path = '/login' component= { Login } />
          <MainLayout /> 
        </Switch>
      </ConnectedRouter>
   </Provider>
  );
}

export default App;
