import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reducer } from "./reducer";

const uuid = require('uuid');

export const initialState = {                                          //initialState
    activeThreadId: '1-fca2',                                                                      //activeThreadId
    threads: [                                                                                     //threads
      {
        id: '1-fca2',                                                                                        //id
        title: 'Buzz Aldrin',                                                                                //title
        messages: [                                                                                          //message                
          {
            text: 'Twelve minutes to ignition.',
            timestamp: Date.now(),
            id: uuid.v4()
          }
        ]
      },
      {
        id: '2-be91',
        title: 'Michael Collins',
        messages: [
          {
            text: 'You\'re going right down U.S. 1,Mike',
            timestamp: Date.now(),
            id: uuid.v4()
          }
        ]
      }
    ]
  }
  
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));                     //store

export default store;