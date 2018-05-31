import { List } from 'immutable'

export const HISTORY_PUSH = 'HISTORY_PUSH'
export const LOCATION_CHANGED = 'LOCATION_CHANGED'

export const historyPush = payload => ({ type: HISTORY_PUSH, payload })
export const locationChanged = payload => ({ type: LOCATION_CHANGED, payload })

const INITIAL_STATE = { location: null }

export default (state = INITIAL_STATE, action) => {
	const { type, payload } = action

	switch (type) {
		case LOCATION_CHANGED:
			return { ...state, location: payload }

		default:
			return state
	}
}
