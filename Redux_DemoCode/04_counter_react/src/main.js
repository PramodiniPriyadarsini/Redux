import {createStore} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';

function counter(state, action) {
  if (typeof state === 'undefined')
    return 0;
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counter);

function displayCounter() {
  ReactDOM.render(<Counter value={store.getState()}
          increment={function() { store.dispatch( {type: 'INCREMENT'}); } }
          decrement={function() { store.dispatch( {type: 'DECREMENT'}); } }
          />, document.getElementById('mycontainer'));
}

displayCounter();
store.subscribe(displayCounter);
