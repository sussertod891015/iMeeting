/*
 * @Author: Sussertod
 * @Date:   2016-09-05 14:56:22
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-05 14:58:33
 */

'use strict';
import {
    combineReducers
} from 'redux';
import counter from './counters';

const rootReducer = combineReducers({
    counter
});

export default rootReducer;
