/*
 * @Author: Sussertod
 * @Date:   2016-09-05 13:07:55
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-05 13:10:53
 */

'use strict';

import {
    createStore
} from 'redux';
import reducer from '../reducers';

export default function configureStore() {
    const store = createStore(reducer);

    return store;
}
