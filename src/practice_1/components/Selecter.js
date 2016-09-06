/*
 * @Author: Sussertod
 * @Date:   2016-09-06 13:09:01
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-06 23:40:01
 */

'use strict';

import React, {
    Component,
    PropTypes
} from 'react';
import ReactDOM, {
    findDOMNode
} from 'react-dom';
import {
    Log
} from '../../Utils/Utils'

export default class Selecter extends Component {
    getOption(dispatch_ = () => {}) {
        let vDOM = this.refs.select;
        let valueTxt;
        let DOM = ReactDOM.findDOMNode(vDOM);
        for (let i of DOM.children) {
            if (i.selected) {
                valueTxt = i.innerHTML;
                break;
            }
        }
        dispatch_(valueTxt);
    }
    render() {
        const {
            value,
            choose
        } = this.props;
        const style = {
            width: '50%',
            height: '50px',
            margin: '0 25%',
            backgroundColor: '#000',
            color: '#fff'
        }
        Log(value, '---from render');
        return (
            <div>
                <select name="select" ref="select" id="select" style={style} onChange={()=>this.getOption(choose)}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <div>{value.value}</div>
            </div>
        );
    }
}
