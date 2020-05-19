import { combineReducers } from 'redux'
import tableReducer from './table/tableReducer'

const rootReducer = combineReducers({
	table: tableReducer
})

export default rootReducer;//importing in store