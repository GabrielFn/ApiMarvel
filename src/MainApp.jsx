import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Store/CreateStore';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from './Views/Layout';
import HomeView from './Views/Home/HomeView';
import PersonagemView from './Views/Personagem/PersonagemView';

const MainApp = () => (
    <Provider store={store}>
        <Layout>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomeView} />
                    <Route path="/personagem/:id" component={PersonagemView} />
                </Switch>
            </BrowserRouter>
        </Layout>
    </Provider>
);

export default MainApp;