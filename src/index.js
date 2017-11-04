import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { todos, visibilityFilter } from './reducers/reducers';
import App from './components/App/App';

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

const store = createStore(
    todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const render = () => {
    ReactDOM.render(
        <App {...store.getState()} store={store} />,
        document.getElementById('root')
    );
};

store.subscribe(render);
render();
