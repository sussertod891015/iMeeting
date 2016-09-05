/*
 * @Author: Sussertod
 * @Date:   2016-09-05 13:05:19
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-05 13:06:52
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
