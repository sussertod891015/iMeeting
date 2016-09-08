/*
 * @Author: Sussertod
 * @Date:   2016-09-08 11:06:40
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-08 15:56:18
 */

'use strict';
import {
    createStore
}
from 'redux';
import {
    Log
} from '../../Utils/Utils';

import reducer from '../reducers/combineReducers';

export default function configureStore() {
    const store = createStore(reducer)
    return store;
}
