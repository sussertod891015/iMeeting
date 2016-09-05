/*
 * @Author: Sussertod
 * @Date:   2016-09-04 23:06:33
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-05 15:00:50
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
import React from 'react'
import {
    render
} from 'react-dom'
import {
    Provider
} from 'react-redux'
import App from './practice_0/containers/App'
import configureStore from './practice_0/store/configureStore'

const store = configureStore();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
