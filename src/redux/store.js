/*to provide redux-store to react-app, the react-redux library has component called provider*/
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer'

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;