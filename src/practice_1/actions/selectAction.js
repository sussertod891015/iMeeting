/*
 * @Author: Sussertod
 * @Date:   2016-09-05 18:53:37
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-06 22:26:21
 */

'use strict';
import {
    Log
} from '../../Utils/Utils';

/**
 * actions样板文件
 * 对于小应用来说，使用字符串做 action type 更方便些。
 * 不过，在大型应用中把它们显式地定义成常量还是利大于弊的。
 * @type {String}
 */
export const CHOOSE_VALUE = 'CHOOSE_VALUE';

/**
 * actions创建函数
 * 用来创建actions，它只是简单的返回一个action。
 * 这样做将使 action 创建函数更容易被移植和测试。
 */
export function choose(value) {
    return {
        type: CHOOSE_VALUE,
        value
    }
}
