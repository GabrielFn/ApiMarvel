import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Store/CreateStore';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from './Views/Layout';
import ListaPersonagensView from './Views/ListaPersonagens/ListaPersonagensView';
import PersonagemView from './Views/Personagem/PersonagemView';

const MainApp = () => (
    <Provider store={store}>
        <Layout>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ListaPersonagensView} />
                    <Route path="/personagem/:id" component={PersonagemView} />
                </Switch>
            </BrowserRouter>
        </Layout>
    </Provider>
);

export default MainApp;