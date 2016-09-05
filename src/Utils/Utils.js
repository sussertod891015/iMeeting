/*
 * @Author: Sussertod
 * @Date:   2016-09-02 15:37:36
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-04 23:42:59
 */

'use strict';

const Log = function(logMsg_) {
    let logStarMsg = 'log:------------------------------>start';
    let logEndMsg = 'log:------------------------------>end';
    window.console.log('');
    window.console.log(logStarMsg);
    window.console.log(logMsg_);
    window.console.log(logEndMsg);
    window.console.log('');
}

export {
    Log
};
