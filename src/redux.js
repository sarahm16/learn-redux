//FILE NOT USED IN THIS PROJECT
//JUST SHOWS HOW TO SET UP STORE AND USE ACTIONS, REDUCERS, AND DISPATCH

import {createStore} from 'redux';

//STORE -> globalized state

//ACTION : function that returns an object
const increment = () => {
    return {
        type: 'INCREMENT' //just the name of the action
    }
}

const decrement = () => {
  return {
      type: 'DECREMENT' //just the name of the action
  }
}

//REDUCER

const counter = (state = 0, action) => { //takes initial state and action as parameters
    switch (action.type) {
      case 'INCREMENT':
          return state + 1;

      case 'DECREMENT':
          return state - 1;
    
      default:
        break;
    }
}

//create the store
let store = createStore(counter); //pass in reducer as parameter

store.subscribe(() => console.log(store.getState())); //just to console.log the state

//DISPATCH
    //dispatch action to reducer, which updates store

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());