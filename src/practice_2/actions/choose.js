/*
 * @Author: Sussertod
 * @Date:   2016-09-07 22:55:00
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-08 15:58:08
 */

'use strict';

import {
    Log
} from '../../Utils/Utils';

/**
 * actions type
 */
export const CHOOSE_VALUE = 'CHOOSE_VALUE';

/**
 * actions creator
 */
export function choose(data) {
    return {
        type: CHOOSE_VALUE,
        data
    }
}
