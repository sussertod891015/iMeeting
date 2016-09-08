/*
 * @Author: Sussertod
 * @Date:   2016-09-07 23:16:14
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-08 17:27:43
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
} from '../../Utils/Utils';
import {
    imgData
} from '../data/imgData';
import imgstyle from './layout.scss';

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
            chooseImg,
            choose
        } = this.props;
        const style = {
            width: '50%',
            height: '50px',
            margin: '0 25%',
            backgroundColor: '#000',
            color: '#fff'
        }
        const animalsName = imgData[chooseImg['data']]['name'];
        const className = imgstyle.img + ' ' + imgstyle['animals-' + animalsName];
        return (
            <div>
                <select name="select" ref="select" id="select" style={style} onChange={()=>this.getOption(choose)}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <h1 style={{textAlign:'center'}}>{animalsName}</h1>
                <div className={className}></div>
            </div>
        );
    }
}
