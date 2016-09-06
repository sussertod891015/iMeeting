/*
 * @Author: Sussertod
 * @Date:   2016-09-05 14:11:34
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-06 22:59:44
 */

'use strict';

import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    CHANGE_COUNTER
} from '../actions/counter.js';
import {
    Log
} from '../../Utils/Utils';

export default function counter(state = 0, actions) {
    switch (actions.type) {
        case INCREMENT_COUNTER:
            {
                return state + 1;
            }
        case DECREMENT_COUNTER:
            {
                return state - 1;
            }
        case CHANGE_COUNTER:
            {
                return actions.index;
            }
        default:
            {
                return state;
            }
    }
}
