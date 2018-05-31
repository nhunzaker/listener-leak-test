import React from 'react'
import { historyPush } from 'duck/router'
import { Switch, Route, Link } from 'react-router-dom'
import Edit from './edit'
import View from './view'
import color from 'utility/color'
import './index.scss'

export default class Root extends React.Component {
	handleViewClick = () => {
		this.props.routeTo('/')
	}

	handleEditClick = () => {
		this.props.routeTo('/edit')
	}

	render() {
		const { routeTo } = this.props

		return (
			<div>
				<h3>{this.props.location}</h3>
				<Link to="/">View Link</Link>
				<Link to="/edit">Edit Link</Link>

				<a onClick={this.handleViewClick}>View Middleware</a>
				<a onClick={this.handleEditClick}>Edit Middleware</a>
				<Switch>
					<Route path={'/edit'} component={Edit} />
					<Route component={View} />
				</Switch>
			</div>
		)
	}
}
