/*
 * @Author: Sussertod
 * @Date:   2016-09-05 13:59:39
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-05 18:54:01
 */

'use strict';
import {
    Log
} from '../../Utils/Utils';

export const INCREMENT_COUNTER = 'INCREMENT_COUNT';
export const DECREMENT_COUNTER = 'DECREMENT_COUNT';
export const CHANGE_COUNTER = 'CHANGE_COUNTER';

/**
 * 加法
 * @return {[type]} [description]
 */
export function increment() {
    return {
        type: INCREMENT_COUNTER
    };
}

/**
 * 减法
 * @return {[type]} [description]
 */
export function decrement() {
    return {
        type: DECREMENT_COUNTER
    }
}

/**
 * 选择
 */
export function change(index) {
    return {
        type: CHANGE_COUNTER,
        index
    }
}
