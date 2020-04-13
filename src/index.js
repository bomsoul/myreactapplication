// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import {createStore, combineReducers, applyMiddleware} from 'redux';
const initialState = {
  result:15000,
  value: []
}
const UserReducer= (state={name: "Bomsoul",age: 15}, action) => {
  switch (action.type) {
    case "setName" : 
        state = {
          ...state,
          name: action.payload
        }
      break;
    case "setAge" : 
        state = {
          ...state,
          age:action.payload
        }
      break;
    default:
  }
  return state;
}
const Employeereducer = (state = initialState, action) =>{
  switch (action.type) {
    case "ADD" : 
        state = {
          ...state,
          result: state.result+= action.payload,
          value: [...state.value,action.payload]
        }
      break;
    case "SUB" : 
        state = {
          ...state,
          result: state.result-= action.payload,
          value: [...state.value,action.payload]
        }
      break;
    default:
  }
  return state;
}
const myLogger = (store) => (next) => (action) => {
  console.log("Log Action",action);
  next(action);
}
const store = createStore(combineReducers({Employeereducer,UserReducer}),{},applyMiddleware(myLogger));
store.subscribe(()=>{
  console.log("Update Store :" ,store.getState());
})
store.dispatch({
  type: "ADD",
  payload: 15000
});
store.dispatch({
  type: "ADD",
  payload: 15000
});
store.dispatch({
  type: "SUB",
  payload: 10000
});
store.dispatch({
  type: "setName",
  payload: "Redux BomSoul"
})
store.dispatch({
  type: "setAge",
  payload: 20
})
