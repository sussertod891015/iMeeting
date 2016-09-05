/*
 * @Author: Sussertod
 * @Date:   2016-09-04 23:20:38
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-05 10:23:57
 */

'use strict';

import React, {
    Component,
    PropTypes
} from 'react'
import Todo from '../Todo'

export default class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.todos.map((todo, index) =>
                  <Todo {...todo}
                        key={index}
                        onClick={() => this.props.onTodoClick(index)} />
                )}
            </ul>
        )
    }
}

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired
}
