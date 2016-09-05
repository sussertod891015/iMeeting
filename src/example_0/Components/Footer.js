/*
 * @Author: Sussertod
 * @Date:   2016-09-04 23:26:30
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-05 10:19:56
 */

'use strict';

import React, {
    Component,
    PropTypes
} from 'react'

export default class Footer extends Component {
    renderFilter(filter, name) {
        if (filter === this.props.filter) {
            return name
        }

        return (
            <div>
                <a href = '#' onClick = {
                    e => {
                        e.preventDefault()
                        this.props.onFilterChange(filter)
                    }
                }>
                    {name}
                </a>
            </div>
        )
    }

    render() {
        return (
            <div>
                Show:
                {' '}
                {this.renderFilter('SHOW_ALL', 'All')}
                {', '}
                {this.renderFilter('SHOW_COMPLETED', 'Completed')}
                {', '}
                {this.renderFilter('SHOW_ACTIVE', 'Active')}
                .
            </div>
        )
    }
}

Footer.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    filter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
}
