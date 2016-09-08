/*
 * @Author: Sussertod
 * @Date:   2016-09-07 23:00:01
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-08 16:41:32
 */

'use strict';

import {
    Log
} from '../../Utils/Utils'
import {
    CHOOSE_VALUE
} from '../actions/choose';

const initialState = {
    data: 0
};



export default function chooseImg(state = initialState, actions) {
    switch (actions.type) {
        case CHOOSE_VALUE:
            {
                return {
                    data: actions.data
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
