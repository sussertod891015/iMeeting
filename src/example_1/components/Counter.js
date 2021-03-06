/*
 * @Author: Sussertod
 * @Date:   2016-09-05 13:13:56
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-05 13:44:36
 */

'use strict';
import React, {
    Component,
    PropTypes
} from 'react'

export default class Counter extends Component {
    render() {
        //从组件的props属性中导入四个方法和一个变量
        const {
            increment,
            decrement,
            counter
        } = this.props;
        //渲染组件，包括一个数字，四个按钮
        return (
            <p>
                Clicked: {counter} times
                {' '}
                <button onClick={increment}>+</button>
                {' '}
                <button onClick={decrement}>-</button>
            </p>
        )
    }
}
//限制组件的props安全
Counter.propTypes = {
    //increment必须为fucntion,且必须存在
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    //counter必须为数字，且必须存在
    counter: PropTypes.number.isRequired
};
