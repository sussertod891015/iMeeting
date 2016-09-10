/*
 * @Author: Sussertod
 * @Date:   2016-09-09 14:54:23
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-09 15:00:33
 */
import React, {
    Component
} from 'react';
import {
    Link
} from 'react-router'

export default class App extends Component {
    render() {
        return (
            <div className="root">
                <h1>App</h1>
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/inbox">Inbox</Link>
                    </li>
                </ul>
                <div>{this.props.children}</div>
            </div>
        );
    }
}
