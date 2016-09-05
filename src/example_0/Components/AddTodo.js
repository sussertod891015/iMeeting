/*
 * @Author: Sussertod
 * @Date:   2016-09-04 23:05:01
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-05 10:18:58
 */

'use strict';

import React, {
    Component,
    PropTypes
} from 'react'

export default class AddTodo extends Component {
    render() {
        return (
            <div>
                <input type='text' ref='input' />
                <button onClick={(e) => this.handleClick(e)}>
                  Add
                </button>
          </div>
        )
    }

    handleClick(e) {
        const node = this.refs.input
        const text = node.value.trim()
        this.props.onAddClick(text)
        node.value = ''
    }
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
}
