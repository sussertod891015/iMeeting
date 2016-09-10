/*
 * @Author: Sussertod
 * @Date:   2016-09-09 15:03:08
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-09 17:45:58
 */

'use strict';

import React, {
    Component
} from 'react';
import {
    log
} from '../Utils/Utils'

export default class Message extends Component {
    render() {
        return (
            <div>
                <h3>Message</h3>
                <div>{this.props.params.id}</div>
            </div>
        );
    }
}
