/*
 * @Author: Sussertod
 * @Date:   2016-09-02 15:37:36
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-09 11:43:47
 */

'use strict';

// const Log = function() {
export function log() {
    let logStarMsg = 'log:------------------------------>start';
    let logEndMsg = 'log:------------------------------>end';
    window.console.log('');
    window.console.log(logStarMsg);
    window.console.log.apply(console, arguments);
    window.console.log(logEndMsg);
    window.console.log('');
}
