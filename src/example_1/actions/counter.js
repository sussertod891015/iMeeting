/*
 * @Author: Sussertod
 * @Date:   2016-09-05 12:51:00
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-05 12:55:46
 */

'use strict';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

/**
 * 加法
 * @return {[type]} [description]
 */
export function increment() {
    return {
        type: INCREMENT_COUNTER
    };
}

export function decrement() {
    return {
        type: DECREMENT_COUNTER
    }
}
