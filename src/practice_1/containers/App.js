/*
 * @Author: Sussertod
 * @Date:   2016-09-06 13:11:53
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-06 23:30:12
 */

'use strict';

import {
    bindActionCreators
} from 'redux'
import {
    connect
} from 'react-redux'
import Selecter from '../components/Selecter'
import * as SelecterActions from '../actions/selectAction'
import {
    Log
} from '../../Utils/Utils'

function mapStateToProps(state) {
    return {
        value: state.value
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(SelecterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Selecter)
