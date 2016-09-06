/*
 * @Author: Sussertod
 * @Date:   2016-09-05 19:12:40
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-06 23:12:14
 */

'use strict';

import {
    createStore
} from 'redux';
import reducer from '../reducers/combineReducers';
import {
    Log
} from '../../Utils/Utils';

export default function configureStore() {
    const store = createStore(reducer);
    return store;
}
