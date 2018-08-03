import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import history from '../Utils/BrowserHistory';
import reducers from '../Components/Reducers';
import clientMiddleware from '../Utils/ClientMiddleware';

const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, routeMiddleware, clientMiddleware];

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  compose(applyMiddleware(...middlewares))
);

export { store, history };
