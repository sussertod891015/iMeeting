/*
 * @Author: Sussertod
 * @Date:   2016-09-05 18:59:48
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-07 00:51:32
 */

'use strict';

import {
    CHOOSE_VALUE
} from '../actions/selectAction';
import {
    Log
} from '../../Utils/Utils';

/**
 * reducer指明应该如何更新state
 * @type {[type]}
 */

const initialState = {
    value: 99
};

export default function value(state = initialState, actions) {
    switch (actions.type) {
        case CHOOSE_VALUE:
            {
                return {
                    ...state,
                    value: actions.value
                }
                // return Object.assign({}, {
                //     value: actions.value
                // });
            }
        default:
            {
                return state;
            }
    }
}
