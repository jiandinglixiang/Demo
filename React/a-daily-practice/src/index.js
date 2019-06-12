import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
/*整合与,中间件链接器*/
import { Provider } from 'react-redux';
/*是为了让子组件拿到store*/
import { createLogger } from 'redux-logger';
/*redux日志中间件*/
import { BrowserRouter as Router, Route } from 'react-router-dom';
/*路由4*/
import reducer from './redux/reducer';
/*累加器*/
import rootSaga from './redux/sagas';
/**/
import createSagaMiddleware  from 'redux-saga';
/**/

import './index.css';
import App from './pages/App';
import About from './pages/About';
import registerServiceWorker from './registerServiceWorker';

const sagasMiddleware= createSagaMiddleware();
const middleware = applyMiddleware(sagasMiddleware, createLogger());
const STORE = createStore(reducer, middleware);

sagasMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={ STORE }>
        <Router  >
            <div>
                <Route exact path='/' component={ App }/>
                <Route path='/about' component={ About }/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
