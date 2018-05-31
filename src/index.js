import React from 'react'
import ReactDOM from 'react-dom'
import App from 'component'
import { applyMiddleware, createStore } from 'redux'
import reducers, { epics } from 'duck'
import { composeWithDevTools } from 'redux-devtools-extension'
import { List } from 'immutable'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import history, { routerMiddleware } from './router'
import { locationChanged } from 'duck/router'
import { Router } from 'react-router-dom'

const enhancer = composeWithDevTools(applyMiddleware(routerMiddleware, logger))

const store = createStore(reducers, { router: { location: null } }, enhancer)

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
)

history.listen(x => {
	store.dispatch(locationChanged(x.pathname))
})
