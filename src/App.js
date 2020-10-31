import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment} from './actions/index';
import { decrement } from './actions';
import { signout } from './actions';
import { signin } from './actions';

function App() {
  const counter = useSelector(state => state.counter); //
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
        <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <br />
        <br />

        <button onClick={() => dispatch(signin())}>sign in</button>
        <button onClick={() => dispatch(signout())}>sign out</button>

        {isLogged && 
          <h1>I am logged in</h1>}
        {/* <button onClick={store.dispatch({type: 'INCREMENT'})}>Increment</button> */}
    </div>
  );
}

export default App;
