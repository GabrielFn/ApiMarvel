import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Store/CreateStore';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from './Views/Layout';
import ListaPersonagensView from './Views/ListaPersonagens/ListaPersonagensView';

const MainApp = () => (
    <Provider store={store}>
        <Layout>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ListaPersonagensView} />
                </Switch>
            </BrowserRouter>
        </Layout>
    </Provider>
);

export default MainApp;