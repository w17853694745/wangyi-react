import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reduces'
import {composeWithDevTools} from 'redux-devtools-extension'

export default new createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))