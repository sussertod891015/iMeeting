/*
 * @Author: Sussertod
 * @Date:   2016-09-07 23:13:19
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-08 16:33:25
 */

'use strict';

import {
    combineReducers
} from 'redux';
import {
    Log
} from '../../Utils/Utils';

import chooseImg from './chooser';

const reducer = combineReducers({
    chooseImg
});

export default reducer;
