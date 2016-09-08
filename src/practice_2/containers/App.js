/*
 * @Author: Sussertod
 * @Date:   2016-09-08 11:10:56
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-08 16:38:37
 */

'use strict';

import {
    bindActionCreators
} from 'redux';
import {
    connect
} from 'react-redux'
import Selecter from '../components/ChooseImg'
import * as SelecterActions from '../actions/choose'
import {
    Log
} from '../../Utils/Utils'


//这里只是绑定
function mapStateToProps(state) {
    return {
        chooseImg: state.chooseImg
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(SelecterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Selecter)
