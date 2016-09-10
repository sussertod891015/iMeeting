/*
 * @Author: Sussertod
 * @Date:   2016-09-09 15:00:55
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-09 17:34:28
 */

'use strict';

import React, {
    Component
} from 'react'
import {
    Link
} from 'react-router'
import {
    log
} from '../Utils/Utils';

export default class Inbox extends Component {
    render() {
        //此处Txt有可能是一个React组件，所以不要放在p标签中
        const Txt = this.props.children || "welcome to your Inbox";
        return (
            <div>
                <h2>Inbox</h2>
                <div>{Txt}</div>
            </div>
        );
    }
}
