/*
 * @Author: Sussertod
 * @Date:   2016-09-05 15:00:09
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-06 22:55:33
 */

'use strict';

import {
    createStore
} from 'redux';
import rootReducer from '../reducers';
import {
    Log
} from '../../Utils/Utils';

export default function configureStore() {
    const store = createStore(rootReducer);
    return store;
}
