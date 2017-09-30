// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App.js';
//
// ReactDOM.render(
//   <App/>, document.getElementById('root'));

import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger as logger } from 'redux-logger';

const userReducer = (state={}, actions) => {
  switch(actions.type) {
    case "CHANGE_NAME": {
      state = {...state, name: actions.payload}
      // state.name = actions.payload;
      break;
    }
    case "CHANGE_AGE": {
      state = {...state, age: actions.payload}
      // state.age = actions.payload;
      break;
    }
  }
  return state;
}

const tweetsReducer = (state=[], actions) => {
  return state;
}

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
})

const middleware = applyMiddleware(logger());
const store = createStore(reducers, middleware);

store.subscribe(() => {
  console.log("store changed", store.getState())
});

store.dispatch({type: "CHANGE_NAME", payload: 'Dennis'});
store.dispatch({type: "CHANGE_AGE", payload: 24});
