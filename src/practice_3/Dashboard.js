/*
 * @Author: Sussertod
 * @Date:   2016-09-09 16:31:46
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-09 17:46:05
 */

'use strict';
import React, {
    Component
} from 'react';
import {
    Link
} from 'react-router';


export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <div>Welcome to the app!</div>
                <Link to="/messages/3">Inbox</Link>
            </div>
        );
    }
}
