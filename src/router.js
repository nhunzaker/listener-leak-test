import createBrowserHistory from 'history/createBrowserHistory'
import { HISTORY_PUSH } from 'duck/router'

const history = createBrowserHistory()

export default history

export const routerMiddleware = () => next => action => {
	if (action.type === HISTORY_PUSH) {
		history.push(action.payload)
	}
	next(action)
}
