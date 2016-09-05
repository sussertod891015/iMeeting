/*
 * @Author: Sussertod
 * @Date:   2016-09-04 23:07:26
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-05 10:33:19
 */

'use strict';

import React, {
	Component,
	PropTypes
} from 'react'

export default class Todo extends Component {
	render() {
		const style = {
			textDecoration: this.props.completed ? 'line-through' : 'none',
			cursor: this.props.completed ? 'default' : 'pointer'
		};

		return (
			<li onClick={this.props.onClick} style={style}>
				{this.props.text}
			</li>
		);
	}
}

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired
}
