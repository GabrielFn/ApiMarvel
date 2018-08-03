import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Store/CreateStore';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeView from './Views/Home/HomeView';

const MainApp = () => (
    <Provider store={store}>
        <Router>           
            <Route exact path="/" component={HomeView} />
        </Router>
    </Provider>
);

export default MainApp;