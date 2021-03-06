/*
 * @Author: Sussertod
 * @Date:   2016-09-05 13:13:05
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-05 13:49:34
 */

'use strict';

import {
    bindActionCreators
} from 'redux'
import {
    connect
} from 'react-redux'
import Counter from '../components/Counter'
import * as CounterActions from '../actions/counter'
import {
    Log
} from '../../Utils//Utils';

Log(CounterActions);

//将state.counter绑定到props的counter
function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
    return bindActionCreators(CounterActions, dispatch)
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
