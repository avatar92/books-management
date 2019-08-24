import {combineReducers,createStore} from 'redux'
import bookReducer from './booksreducers.js'
const store = createStore(combineReducers({
    bookReducer, 
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store; 