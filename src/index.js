import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './static/css/index.css';
import App from './App.jsx';
//children component
import reducer from './redux/index.js';
import Other from './page/Other.jsx';
import registerServiceWorker from './static/js/registerServiceWorker';

const store = createStore(reducer);
ReactDOM.render(
    (<Provider store={store}>      
        <BrowserRouter>
            <Switch>
                <Route path='/app' component={App} />
                <Route path='/other' component={Other} />
                <Redirect to='/app' />
            </Switch>
        </BrowserRouter>
    </Provider>
    ),
    document.getElementById('root')
)

registerServiceWorker();
