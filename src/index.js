import React from 'react'
import ReactDOM from 'react-dom'

/*
To reproduce event listener leak:

1: Open dev tools and enter the performance tab.
2: Start profiling.
3: Repeat the folowing steps 3 or more times:
  - click [edit] and click on the text input.
  - click away from the input and click [view]
  - click the garbage can at the top of the performance panel to trigger a Major GC.
4: Stop profiling and observe the accumulation of event listeners and their respective nodes.
*/

class App extends React.Component {
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

ReactDOM.render(<App />, document.getElementById('root'))
