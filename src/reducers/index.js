import {combineReducers} from 'redux';
import loggedReducer from './isLogged.js';
import counterReducer from './counter.js';

const rootReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})

export default rootReducer;