// @flow
import { hot } from 'react-hot-loader'
import { historyPush } from 'duck/router'
import { connect } from 'react-redux'
import Component from 'component/root'
import select from 'select'

const mapStateToProps = state => ({
	location: select.location(state)
})

const mapDispatchToProps = dispatch => ({
	routeTo: payload => dispatch(historyPush(payload))
})

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(Component))
