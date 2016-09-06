/*
 * @Author: Sussertod
 * @Date:   2016-09-05 14:59:01
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-06 22:56:28
 */

'use strict';

import React, {
    Component,
    PropTypes
} from 'react'
import {
    Log
} from '../../Utils/Utils'

export default class Counter extends Component {
    render() {
        //从组件的props属性中导入四个方法和一个变量
        const {
            increment,
            decrement,
            change,
            counter
        } = this.props;
        //渲染组件，包括一个数字，四个按钮
        //
        const btnStyle = {
            border: '1px solid #000',
            margin: '0 5px'
        };
        return (
            <p>
                Clicked: {counter} times
                {' '}
                <button onClick={increment} style={btnStyle}>+</button>
                {' '}
                <button onClick={decrement} style={btnStyle}>-</button>
                <button onClick={()=>change(5)} style={btnStyle}>changeTo5</button>
            </p>
        )
    }
}
//限制组件的props安全
Counter.propTypes = {
    //increment必须为fucntion,且必须存在
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    change: PropTypes.func.isRequired,
    //counter必须为数字，且必须存在
    counter: PropTypes.number.isRequired
};
