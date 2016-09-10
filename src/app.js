/*
 * @Author: Sussertod
 * @Date:   2016-09-04 23:06:33
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-09 17:46:13
 */

'use strict';
import 'normalize.css';

/**
 * example_0
 */

// import React from 'react'
// import {
//     render
// } from 'react-dom'
// import {
//     createStore
// } from 'redux'
// import {
//     Provider
// } from 'react-redux'
// import App from './example_0/container'
// import todoApp from './example_0/reducers'

// let store = createStore(todoApp)

// let rootElement = document.getElementById('app')
// render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     rootElement
// )

/**
 * example_1
 */
// import React from 'react'
// import {
//     render
// } from 'react-dom'
// import {
//     Provider
// } from 'react-redux'
// import App from './example_1/containers/App'
// import configureStore from './example_1/store/configureStore'

// const store = configureStore();

// render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('app')
// )



/**
 * practice_0
 */
// import React from 'react'
// import {
//     render
// } from 'react-dom'
// import {
//     Provider
// } from 'react-redux'
// import App from './practice_0/containers/App'
// import configureStore from './practice_0/store/configureStore'

// const store = configureStore();

// render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('app')
// )


/**
 * practice_1
 */
// import {
//     Log
// } from './Utils/Utils';
// import React from 'react'
// import {
//     render
// } from 'react-dom'
// import {
//     Provider
// } from 'react-redux'
// import App from './practice_1/containers/App'
// import DevTools from './practice_1/containers/DevTools'
// import configureStore from './practice_1/store/configureStore'

// window.store = configureStore();

// render(
//     <Provider store={store}>
//         <div>
//             <App />
//             <DevTools />
//         </div>
//     </Provider>,
//     document.getElementById('app')
// )

/**
 * practice_2
 */
// import {
//     log
// } from './Utils/Utils';
// import React from 'react'
// import {
//     render
// } from 'react-dom'
// import {
//     Provider
// } from 'react-redux'
// import App from './practice_2/containers/App'
// import configureStore from './practice_2/store/configureStore'

// let store = configureStore();

// render(
//     <Provider store={store}>
//         <div>
//             <App />
//         </div>
//     </Provider>,
//     document.getElementById('app')
// )

/**
 * practice_3
 */
import {
    log
} from './Utils/Utils'
import React, {
    Component
} from 'react'
import ReactDOM, {
    render
} from 'react-dom';
import {
    Router,
    Route,
    Link,
    hashHistory,
    Redirect,
    IndexRoute
} from 'react-router'
import App from './practice_3/App'
import About from './practice_3/About'
import Inbox from './practice_3/Inbox'
import Message from './practice_3/Message'
import Dashboard from './practice_3/Dashboard'

render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Dashboard} />
            <Route path="about" component={About} />
            <Route path="inbox" component={Inbox}>
                <Route path="/messages/:id" component={Message}>
                    <Redirect from="messages/:id" to="/messages/:id" />
                </Route>
            </Route>
        </Route>
    </Router>, document.getElementById('app'));
