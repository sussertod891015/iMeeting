/*
 * @Author: Sussertod
 * @Date:   2016-09-05 19:12:40
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-06 23:12:14
 */

'use strict';

import {
    createStore,
    compose
} from 'redux';
import reducer from '../reducers/combineReducers';
import DevTools from '../containers/DevTools'
import {
    Log
} from '../../Utils/Utils';

export default function configureStore() {
    // 把多个 store 增强器从右到左来组合起来，依次执行
    // 这个地方完全可以不用compose，演示一下compose的使用
    const enhancer = compose(
        DevTools.instrument()
    )
    const store = createStore(reducer, enhancer)
    return store;
}
