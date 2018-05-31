import React from 'react'

export default class Root extends React.Component {
	constructor() {
		super()

		this.state = {
			edit: false
		}
	}

	handleClick = () => {
		this.setState(() => ({ edit: !this.state.edit }))
	}

	render() {
		return (
			<div>
				<button onClick={this.handleClick}>{this.state.edit ? 'view' : 'edit'}</button>
				<br />

				{this.state.edit ? <input /> : <p>view</p>}
			</div>
		)
	}
}
