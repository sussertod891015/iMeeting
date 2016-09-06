/*
 * @Author: Sussertod
 * @Date:   2016-09-05 19:10:22
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-06 23:24:56
 */

'use strict';
import {
    combineReducers
} from 'redux';
import value from './selectReducer';

const reducer = combineReducers({
    value
});

export default reducer;
