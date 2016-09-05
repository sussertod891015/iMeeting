/*
 * @Author: Sussertod
 * @Date:   2016-09-05 12:56:25
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-05 13:05:01
 */

'use strict';
import React from 'react';
import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER
} from '../actions/counter';
import {
    Log
} from '../../Utils/Utils';

export default function counter(state = 0, actions) {
    switch (actions.type) {
        case INCREMENT_COUNTER:
            {
                return state + 1
            }
        case DECREMENT_COUNTER:
            {
                return state - 1
            }
        default:
            {
                return state
            }
    }
}
